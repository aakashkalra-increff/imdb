const URL = "/api/ui-testing"
export const fetchMovies = async () => {
  try {
    const res = await fetch(URL);
    return res.json();
  } catch (e) {
    return [];
  }
};
