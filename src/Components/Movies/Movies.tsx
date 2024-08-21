import React, { useEffect, useState } from "react";
import MoviesListCall from "../../Api/MoviesListCall";
import { MoviesListProps } from "../../Types/AppTypes";
import { SingleMovie } from "../SingleMovie/SingleMovie";
import "../Movies/Movies.css";

export const Movies = () => {
  const [movies, setMovies] = useState<MoviesListProps[]>();
  useEffect(() => {
    MoviesListCall.get(``, {}).then((res) => setMovies(res.data));
  }, []);

  return (
    <div className="container">
      {movies?.map((item, index) => {
        return (
          <ul key={index}>
            <li>
              <SingleMovie data={movies} />
            </li>
          </ul>
        );
      })}
    </div>
  );
};
