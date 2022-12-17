const API_KEY = process.env.API_KEY;

export default {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&languaje=en-US`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&languaje=en-US`,
  },
  fetchActionMovies: {
    title: "Action",
    url: `/discover/movie?api_key=${API_KEY}&with_genred=28`,
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `/discover/movie?api_key=${API_KEY}&with_genred=35`,
  },
  fetchHorrorMovies: {
    title: "Horror",
    url: `/discover/movie?api_key=${API_KEY}&with_genred=27`,
  },
  fetchRomanceMovies: {
    title: "Romance",
    url: `/discover/movie?api_key=${API_KEY}&with_genred=10749`,
  },
  fetchMystery: {
    title: "Mystery",
    url: `/discover/movie?api_key=${API_KEY}&with_genred=9648`,
  },
  fetchSciFi: {
    title: "SciFi",
    url: `/discover/movie?api_key=${API_KEY}&with_genred=878`,
  },
  fetchWester: {
    title: "Wester",
    url: `/discover/movie?api_key=${API_KEY}&with_genred=37`,
  },
  fetchAnimation: {
    title: "Animation",
    url: `/discover/movie?api_key=${API_KEY}&with_genred=16`,
  },
  fetchtTv: {
    title: "TV",
    url: `/discover/movie?api_key=${API_KEY}&with_genred=10770`,
  },
};
