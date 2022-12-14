import React, { useState } from "react";
import classes from './Login.module.css';
import './LoginReg.css';

 const Login = (props) => {
  const [enteredEmail, setEmail] = useState("");
  const [enteredPassword, setPassword] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const emailHandler = (event) => {
    setEmail(event.target.value);

    setFormIsValid(
      event.target.values?.includes('@') && enteredPassword.trim().length > 7
    );
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);

    setFormIsValid(event.target.value.trim().length > 7 && enteredEmail?.includes('@'));
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 7);
  };

  const submitHandler = (event) => {
    console.log('logged')
    event.preventDefault();
    const loginData = {
      email: enteredEmail,
      password: enteredPassword,
    };
    console.log(loginData);
  };

  return (
    <>
      <div className="auth-form-container">
        <h1>Login</h1>
        <form className="login-form" onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            id="email"
            name="email"
            onChange={emailHandler}
            onBlur={validateEmailHandler}
            value={enteredEmail}
          />
          </div>
          <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="********"
            id="password"
            name="password"
            onChange={passwordHandler}
            onBlur={validatePasswordHandler}
            value={enteredPassword}
          />
          </div>
          <div className={classes.actions}>
          <button type="submit" className={classes.btn} disabled={!formIsValid}>Login</button>
          </div>
        </form>
        <div>
          <button
            className="link-btn"
            onClick={() => props.onToggle("register")}
          >
            Don't Have Account? Register Here.
          </button>
        </div>
      </div>
    </>
  );
};

export default Login