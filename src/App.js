import React, { useState } from "react";
import "./App.css";
// import Header from "./components/navigation/Header";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
     

      {/* {page === "login" ? (
        <Login onToggle={toggleForm} />
      ) : (
        <Register onToggle={toggleForm} />
      )} */}
      {/* <Header isAuthenticated={isLoggedIn} onLogout={logoutHandler}></Header> */}

      {/* <main>
        {!isLoggedIn && <Login onLogin={loginHandler}/>}
        {isLoggedIn && <Login onLogout={logoutHandler}/>}
        
      </main> */}
    </div>
  );
};

export default App;
