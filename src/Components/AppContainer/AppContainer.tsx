import React, { useEffect, useState } from "react";
import "../AppContainer/AppContainer.css";
import LoginCall from "../../Api/LoginCall";
import MoviesListCall from "../../Api/MoviesListCall";
import { Movies } from "../Movies/Movies";
import axios from "axios";

export const AppContainer = () => {
  const [token, setToken] = useState<string>("");

  const handleLogin = (event: any) => {
    axios
      .post(` https://kamaji2.dev.netbuilder.it/00900000/auth`, {
        username: "dariomilani855@gmail.com",
        password: "manchestercity",
        grant_type: "password",
      })
      .then((res) => setToken(res.data.access_token));
  };

  console.log("token", token);

  return (
    <div>
      {token ? (
        <Movies token={token} />
      ) : (
        <div className="login_container">
          <div className="username">
            <input placeholder="username" />
          </div>
          <div className="password">
            <input placeholder="password" />
          </div>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};
