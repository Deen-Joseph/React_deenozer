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
import LogRegPage from "./components/login/LogRegTab";
// import Register from "./components/login/RegisterPage";
import PlayersDB from "./components/pages/PlayersDB"

import Header from "./components/navigation/Header";

import Footer from "./components/navigation/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LogRegPage />,
    errorElement: <NotFound />,
  },
  {
    path: "/login",
    element: <LogRegPage />,   
  },
  // {
  //   path: "login",
  //   element: <Login />,
  // },
  // {
  //   path: "register",
  //   element: <Register />,
  // },
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
  }, {
    path: "database",
    element: <PlayersDB />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header></Header>
      <RouterProvider router={router} />
      <Footer></Footer>
  </React.StrictMode>
);
