"use client";
import { useEffect, useState } from "react";
import { fetchMovies } from "../actions";
import Search from "./Search";
import MovieList from "./MovieList";
import moment from "moment";
const Home = () => {
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
  const handleChange = (val) => {
    setSearch(val);
    filterMovies(val);
  };
  const filterMovies = (val) => {
    const m = movies.filter(({ Title, Director, Plot, Language }) => {
      const s = Title + " " + Director + " " + Plot + " " + Language;
      return s.toLocaleLowerCase().includes(val.toLocaleLowerCase().trim());
    });
    setFilteredMovies([...m]);
  };
  const handleSortChange = (key) => {
    let sortedMovies = [];
    if (key === "featured") {
      sortedMovies = movies;
    } else if (key === "Released") {
      sortedMovies = filteredMovies.sort((item1, item2) => {
        return item1[key] === "N/A"
          ? 1
          : item2[key] === "N/A"
          ? -1
          : moment(item2[key], "DD MMM YYYY").valueOf() -
            moment(item1[key], "DD MMM YYYY").valueOf();
      });
    } else {
      sortedMovies = filteredMovies.sort((item1, item2) =>
        item1[key] === "N/A"
          ? 1
          : item2[key] === "N/A"
          ? -1
          : item2[key] - item1[key]
      );
    }
    setFilteredMovies([...sortedMovies]);
  };
  return (
    <div>
      <div className="py-10 w-full">
        <Search
          val={search}
          handleChange={handleChange}
          toggleView={toggleView}
          handleSortChange={handleSortChange}
          view={view}
        />
      </div>
      <MovieList movies={filteredMovies} view={view} />
    </div>
  );
};
export default Home;
