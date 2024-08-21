import React from "react";
import "./App.css";
import { Login } from "./Components/Login/Login";
import { Route, Routes } from "react-router-dom";
import { Movies } from "./Components/Movies/Movies";

export const App = () => {
  return (
    <div className="App">
      <Movies />
    </div>
  );
};
