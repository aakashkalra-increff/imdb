"use client";
import { useState, useEffect, useRef } from "react";
import MovieCard from "./MovieCard";
import MovieDetail from "./MovieDetail/MovieDetail";
const MovieList = ({ movies, view }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedRow, setSelectedRow] = useState(0);
  const gridRef = useRef(null);
  const handleClick = (movie, index) => {
    setSelectedMovie(null);
    setTimeout(() => {
      setSelectedMovie(movie);
      const columns = getComputedStyle(
        gridRef.current
      ).gridTemplateColumns.split(" ").length;
      setSelectedRow(Math.floor(index / columns) + 1);
    }, 100);
  };

  useEffect(() => {
    setSelectedMovie(null);
  }, [JSON.stringify(movies), view]); // eslint-disable-line
  return (
    <div className="mt-16 md:mt-0 px-3 md:px-0" >
      {movies.length ? (
        <div>
          {view === "grid" ? (
            <div
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[1rem]"
              ref={gridRef}
            >
              {selectedMovie && (
                <MovieDetail movie={selectedMovie} row={selectedRow} />
              )}
              {movies.map((movie, i) => (
                <div key={movie.imdbID} onClick={() => handleClick(movie, i)}>
                  <MovieCard key={movie.Title} movie={movie} />
                </div>
              ))}
            </div>
          ) : (
            <div>
              {movies.map((movie, i) => (
                <div key={movie.imdbID}>
                  <MovieDetail
                    movie={movie}
                    showAnimation={false}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div>No items for this search.</div>
      )}
    </div>
  );
};
export default MovieList;
