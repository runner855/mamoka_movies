import React, { useEffect, useState } from "react";
import MoviesListCall from "../../Api/MoviesListCall";
import { MoviesListProps } from "../../Types/AppTypes";
import { Card } from "antd";
import "../Movies/Movies.css";
import { Tag } from "antd";
const { Meta } = Card;

export const Movies = () => {
  const [movies, setMovies] = useState<MoviesListProps[]>();
  useEffect(() => {
    MoviesListCall.get(``, {}).then((res) => setMovies(res.data));
  }, []);

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
              </Card>
            </li>
          </ul>
        );
      })}
    </div>
  );
};
