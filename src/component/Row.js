import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./Row.css";

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            className={isLargeRow ? "row_posterLarge" : "row_poster"}
            key={movie.id}
            src={
              isLargeRow
                ? baseUrl + movie.poster_path
                : baseUrl + movie.backdrop_path
            }
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
