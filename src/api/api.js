const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '04e81f6e5279def5b1a55a2f401d6ead';

export const getTrending = async () => {
  try {
    const data = await fetch(`${BASE_URL}/trending/all/day?api_key=${KEY}`);
    return await data.json();
  } catch (error) {
    console.log(error);
  }
};

export const getMovies = async search => {
  try {
    const data = await fetch(
      `${BASE_URL}/search/movie?api_key=${KEY}&query=${search}&page=1`
    );
    return await data.json();
  } catch (error) {
    console.log(error);
  }
};
