"use client";
import { useEffect, useState } from "react";
import { fetchMovies } from "../actions";
import Navbar from "./Navbar";
import MovieList from "./MovieList";
import { Invalid } from "../constants";
const Home = ({ toggleSideNav }) => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [view, setView] = useState("grid");
  const toggleView = () => {
    setView(view === "grid" ? "list" : "grid");
  };
  useEffect(() => {
    (async () => {
      const movies = await fetchMovies();
      setMovies([...movies]);
      setFilteredMovies([...movies]);
    })();
  }, []);
  const handleChange = (val: string) => {
    setSearch(val);
    filterMovies(val);
  };
  const filterMovies = (val: string) => {
    const m = movies.filter(({ Title, Director, Plot, Language }) => {
      const s = Title + " " + Director + " " + Plot + " " + Language;
      return s.toLocaleLowerCase().includes(val.toLocaleLowerCase().trim());
    });
    setFilteredMovies([...m]);
  };
  const applySort = (key: string) => {
    switch (key) {
      case "Released":
        return filteredMovies.sort((item1, item2) => {
          return item1[key] === Invalid.NA
            ? 1
            : item2[key] === Invalid.NA
            ? -1
            : new Date(item2[key]).getTime() -
              new Date(item1[key]).getTime();
        });
      case "imdbRating":
        return filteredMovies.sort((item1, item2) =>
          item1[key] === Invalid.NA
            ? 1
            : item2[key] === Invalid.NA
            ? -1
            : item2[key] - item1[key]
        );
      default:
        return movies;
    }
  };
  const handleSortChange = (key: string) => {
    const sortedMovies = applySort(key);
    setFilteredMovies([...sortedMovies]);
  };
  return (
    <div className="pb-3">
      <div className="md:py-10 mb-2 md:mb-0 w-full md:static z-20 fixed  left-0  top-0">
        <Navbar
          val={search}
          handleChange={handleChange}
          toggleView={toggleView}
          handleSortChange={handleSortChange}
          view={view}
          toggleSideNav={toggleSideNav}
        />
      </div>
      <MovieList movies={filteredMovies} view={view} />
    </div>
  );
};
export default Home;
