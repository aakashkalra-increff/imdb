"use client";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import MovieDetail from "./MovieDetail/MovieDetail";
const MovieList = ({ movies, view }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedRow, setSelectedRow] = useState(0);
  const handleClick = (movie, index) => {
    setSelectedMovie(null);
    setTimeout(() => {
      setSelectedMovie(movie);
      setSelectedRow(Math.floor(index / 5) + 1);
    }, 100);
  };

  useEffect(() => {
    setSelectedMovie(null);
  }, [JSON.stringify(movies), view]);
  return (
    <>
      {movies.length ? (
        <div className="px-3 md:px-0">
          {view === "grid" ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[2rem]">
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
                <div key={movie.imdbID} onClick={() => handleClick(movie, i)}>
                  <MovieDetail
                    key={movie.Title}
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
    </>
  );
};
export default MovieList;
