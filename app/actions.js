const URL = "./movies-list.json";
export const fetchMovies = async () => {
  try {
    const res = await fetch(URL);
    return res.json();
  } catch (e) {
    return [];
  }
};
export const findMovieById = async (id) => {
  const movies = await fetchMovies();
  return movies.find((movie) => movie.imdbID === id);
};
