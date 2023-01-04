import React, { useState } from "react";
import classes from "./Login.module.css";
import "./LoginReg.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = (props) => {
  const [enteredEmail, setEmail] = useState("");
  const [enteredPassword, setPassword] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const emailHandler = (event) => {
    setEmail(event.target.value);

    setFormIsValid(
      event.target.values?.includes("@") && enteredPassword.trim().length > 7
    );
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 7 && enteredEmail?.includes("@")
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 7);
  };
  const toastConfig = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const loginData = {
      email: enteredEmail,
      password: enteredPassword,
    };
    axios
      .post("http://localhost:3001/login", loginData)
      .then((response) => {
        toast.success("Login Success!", toastConfig);
        localStorage.setItem("jwt", response);
        // console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 401) {
          toast.error("Invalid Credentials, Unauthorized", toastConfig);
        } else toast.error(error.response.data.message, toastConfig);
      });
  };

  return (
    <>
      <div>
        <ToastContainer />
      </div>
      <div className="log-app">
        <div className="auth-form-container">
          <h1>Login</h1>
          <form className="login-form" onSubmit={submitHandler}>
            <div
              className={`${classes.control} ${
                emailIsValid === false ? classes.invalid : ""
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

            {emailIsValid === false && (
              <p className="val-error">Please check the Email</p>
            )}

            <div
              className={`${classes.control} ${
                passwordIsValid === false ? classes.invalid : ""
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
            {passwordIsValid === false && (
              <p className="val-error">Please check the Password</p>
            )}

            <div className={classes.actions}>
              <button
                type="submit"
                className={classes.btn}
                disabled={!formIsValid}
              >
                Login
              </button>
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
      </div>
    </>
  );
};

export default Login;
