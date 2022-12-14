import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NotFound from "./components/pages/NotFound";
import Home from "./components/pages/Home";
import Events from "./components/pages/Events";
import Clubs from "./components/pages/Clubs";
import FA from "./components/pages/FA";
import Players from "./components/pages/Players";
import Login from "./components/login/LoginPage";
import Register from "./components/login/RegisterPage";

import Header from "./components/navigation/Header";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "clubs",
    element: <Clubs />,
  },
  {
    path: "events",
    element: <Events />,
  },
  {
    path: "fa",
    element: <FA />,
  },
  {
    path: "players",
    element: <Players />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header></Header>
      <RouterProvider router={router} />    
  </React.StrictMode>
);
