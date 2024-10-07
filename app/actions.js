const URL = "https://azfun-increff-caas-dev.azurewebsites.net/api/ui-testing/";
import movies from "./movies-list";
export const fetchMovies = async () => {
  // try {
  //   const res = await fetch(URL);
  //   console.log(res);
  //   return res.json();
  // } catch (e) {
  //   console.log(e);
  //   return null;
  // }
  return movies;
};
export const findMovieById = async (id) => {
  const movies = await fetchMovies();
  return movies.find((movie) => movie.imdbID === id);
};
