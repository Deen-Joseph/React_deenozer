import React, { useState } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Header from './components/navigation/Header';
import  Login  from './components/login/LoginPage';
import  Register  from './components/login/RegisterPage'
const App = () => {
  const [page, setPage] = useState("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleForm = (formName) => {
    setPage(formName);
  };

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };
  return (
    <div className="App">
      {page === "login" ? (
        <Login onToggle={toggleForm} />
      ) : (
        <Register onToggle={toggleForm} />
      )}
      <Header isAuthenticated={isLoggedIn} onLogout={logoutHandler}></Header>

      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Login onLogout={logoutHandler} />}
      </main>
    </div>
  );
};

export default App;
