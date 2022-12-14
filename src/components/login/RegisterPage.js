import React, { useState } from "react";
import './LoginReg.css';

const Register = (props) => {
  const [enteredName, setName] = useState("");
  const [enteredEmail, setEmail] = useState("");
  const [enteredPassword, setPassword] = useState("");

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const registerData = {
      name:enteredName,
      email: enteredEmail,
      password: enteredPassword,
    };
    console.log(registerData);
  };

  return (
    <>
      <div className="auth-form-container">
        <h1>Register</h1>
        <form className="register-form" onSubmit={submitHandler}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            id="name"
            name="name"
            onChange={nameHandler}
            value={enteredName}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            id="email"
            name="email"
            onChange={emailHandler}
            value={enteredEmail}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="********"
            id="password"
            name="password"
            onChange={passwordHandler}
            value={enteredPassword}
          />
          <button type="submit">Register</button>
        </form>
        <div>
          <button className="link-btn" onClick={()=>props.onToggle('login')}> Already Have Account? Login Here.</button>
        </div>
      </div>
    </>
  );
};

export default Register