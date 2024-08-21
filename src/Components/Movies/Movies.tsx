import React, { useEffect, useState } from "react";
import MoviesListCall from "../../Api/MoviesListCall";
import { MoviesListProps } from "../../Types/AppTypes";
import { Card } from "antd";
import "../Movies/Movies.css";
import { Tag } from "antd";
import { IoIosCreate } from "react-icons/io";
import axios from "axios";
type TokenProp = {
  token: string;
};
export const Movies = ({ token }: TokenProp) => {
  const [movies, setMovies] = useState<MoviesListProps[]>();
  useEffect(() => {
    MoviesListCall.get(``, {
      headers: { Authorization: `Bearer ${token}` },
    }).then((res) => setMovies(res.data));
  }, []);

  const addMovie = () => {
    axios
      .post(` http://kamaji2.dev.netbuilder.it/00900000/movies`, {
        available: null,
        category: ["7", "10"],
        director: "Steven Spielberg",
        title: "Indiana Jones e il tempio maledetto",
        year: 1984,
      })
      .then((res) => console.log(res));
  };

  return (
    <div className="container">
      {movies?.map((item, index) => {
        console.log(item.available);
        return (
          <ul key={index}>
            <li>
              <Card style={{ width: 300 }}>
                <div>Title: {item.title}</div>
                <div>Year: {item.year}</div>
                <div>
                  Categories:
                  {item.category.map((item, index) => {
                    return `${" "}${item.name.toUpperCase()}${" "}`;
                  })}
                </div>
                <div>
                  Available:
                  {item.available ? (
                    <div className="available">
                      {" "}
                      <Tag color="green">Available</Tag>
                    </div>
                  ) : (
                    <div className="not_available">
                      {" "}
                      <Tag color="red">Not Available</Tag>
                    </div>
                  )}
                </div>
                <div className="edit" onClick={addMovie}>
                  <IoIosCreate />
                </div>
              </Card>
            </li>
          </ul>
        );
      })}
    </div>
  );
};
