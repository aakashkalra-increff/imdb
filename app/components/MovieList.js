"use client";
import { useEffect, useState } from "react";
import { fetchMovies } from "../actions";
import MovieCard from "./MovieCard";
import MovieDetail from "./MovieDetail/MovieDetail";
import Image from "next/image";
import SearchSvg from "../icons/search.svg";
import CloseSvg from "../icons/close.svg"
import Search from "./Search";
const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedRow, setSelectedRow] = useState(0);
  useEffect(() => {
    (async () => {
      const movies = await fetchMovies();
      setMovies([...movies]);
      setFilteredMovies([...movies]);
    })();
  }, []);
  const handleChange = (event) => {
    const val = event.target.value;
    setSearch(val);
    filterMovies(val);
  };
  const filterMovies = (val) => {
    const m = movies.filter(({ Title }) =>
      Title.toLowerCase().includes(val.toLowerCase())
    );
    setFilteredMovies([...m]);
  };
  const handleClick = (movie, index) => {
    setSelectedMovie(null);
    setTimeout(() => {
      setSelectedMovie(movie);
      setSelectedRow(Math.floor(index / 5) + 1);
    }, 100);
  };
  return (
    <div>
      <div className="py-10">
       <Search val={search} handleChange={handleChange}/>
      </div>
      <div className="grid grid-cols-5 gap-[2rem]">
        {selectedMovie && (
          <MovieDetail movie={selectedMovie} row={selectedRow} />
        )}
        {filteredMovies.map((movie, i) => (
          <div
            className=""
            key={movie.imdbID}
            onClick={() => handleClick(movie, i)}
          >
            <MovieCard key={movie.Title} movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default MovieList;
