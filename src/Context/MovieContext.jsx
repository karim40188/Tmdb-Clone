import { createContext } from "react";

export let MovieContext = createContext("");

// eslint-disable-next-line react/prop-types
export function MovieContextProvider({ children }) {
  function getMovies() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Njg4MzU0ZTQ4YjZhNTQyMjllNWJkOGY3OWNlZTIzYiIsIm5iZiI6MTcyMzkzNjE4OS4yNDY5ODIsInN1YiI6IjY2MGY2MzcxZjI4ODM4MDE2NTBlYzc3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EclGcFBwA0EVxK3jRGZsn6Mvo9oYvdAUhOH0xKoGiS8",
      },
    };

    return fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      options
    )
      .then((response) => response.json())
      .then((response) => response)
      .catch((err) => err);
  }

  function details(id) {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Njg4MzU0ZTQ4YjZhNTQyMjllNWJkOGY3OWNlZTIzYiIsIm5iZiI6MTcyMzkzNjE4OS4yNDY5ODIsInN1YiI6IjY2MGY2MzcxZjI4ODM4MDE2NTBlYzc3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EclGcFBwA0EVxK3jRGZsn6Mvo9oYvdAUhOH0xKoGiS8",
      },
    };

    return fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => response)
      .catch((err) => err);
  }

  function addToWatchlist(movieID) {
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Njg4MzU0ZTQ4YjZhNTQyMjllNWJkOGY3OWNlZTIzYiIsIm5iZiI6MTcyNDE1MTAzMS45MTM4NzEsInN1YiI6IjY2MGY2MzcxZjI4ODM4MDE2NTBlYzc3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NSTV1StMBlmqxVeHg8bRdYi6xNqsYnTCm7vAK-_dxRo",
      },
      body: JSON.stringify({
        media_type: "movie",
        media_id: movieID,
        watchlist: true,
      }),
    };

    return fetch(
      "https://api.themoviedb.org/3/account/21189564/watchlist",
      options
    )
      .then((response) => response.json())
      .then((response) => response)
      .catch((err) => err);
  }

  function removeFromWatchList(movieID) {
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Njg4MzU0ZTQ4YjZhNTQyMjllNWJkOGY3OWNlZTIzYiIsIm5iZiI6MTcyNDE1MTAzMS45MTM4NzEsInN1YiI6IjY2MGY2MzcxZjI4ODM4MDE2NTBlYzc3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NSTV1StMBlmqxVeHg8bRdYi6xNqsYnTCm7vAK-_dxRo",
      },
      body: JSON.stringify({
        media_type: "movie",
        media_id: movieID,
        watchlist: false,
      }),
    };

    return fetch(
      "https://api.themoviedb.org/3/account/21189564/watchlist",
      options
    )
      .then((response) => response.json())
      .then((response) => response)
      .catch((err) => err);
  }

  function getWatchList() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Njg4MzU0ZTQ4YjZhNTQyMjllNWJkOGY3OWNlZTIzYiIsIm5iZiI6MTcyNDE1MTAzMS45MTM4NzEsInN1YiI6IjY2MGY2MzcxZjI4ODM4MDE2NTBlYzc3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NSTV1StMBlmqxVeHg8bRdYi6xNqsYnTCm7vAK-_dxRo",
      },
    };

    return fetch(
      "https://api.themoviedb.org/3/account/21189564/watchlist/movies?language=en-US&page=1&sort_by=created_at.asc",
      options
    )
      .then((response) => response.json())
      .then((response) => response)
      .catch((err) => err);
  }

  function trendingMovies() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Njg4MzU0ZTQ4YjZhNTQyMjllNWJkOGY3OWNlZTIzYiIsIm5iZiI6MTcyNDE1MTAzMS45MTM4NzEsInN1YiI6IjY2MGY2MzcxZjI4ODM4MDE2NTBlYzc3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NSTV1StMBlmqxVeHg8bRdYi6xNqsYnTCm7vAK-_dxRo",
      },
    };

    return fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      options
    )
      .then((response) => response.json())
      .then((response) => response)
      .catch((err) => err);
  }

  function upComing() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Njg4MzU0ZTQ4YjZhNTQyMjllNWJkOGY3OWNlZTIzYiIsIm5iZiI6MTcyNDM4OTE0NS40Mjc1MjcsInN1YiI6IjY2MGY2MzcxZjI4ODM4MDE2NTBlYzc3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4QeizYkP-a_dizQ184svTotVJYHFmpn-hltWy5R_iO0",
      },
    };

    return fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => response)
      .catch((err) => err);
  }

  function popular() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Njg4MzU0ZTQ4YjZhNTQyMjllNWJkOGY3OWNlZTIzYiIsIm5iZiI6MTcyNDM4OTE0NS40Mjc1MjcsInN1YiI6IjY2MGY2MzcxZjI4ODM4MDE2NTBlYzc3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4QeizYkP-a_dizQ184svTotVJYHFmpn-hltWy5R_iO0",
      },
    };

    return fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => response)
      .catch((err) => err);
  }

  function topRated() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Njg4MzU0ZTQ4YjZhNTQyMjllNWJkOGY3OWNlZTIzYiIsIm5iZiI6MTcyNDUwMDEzNC4zMjc4OTYsInN1YiI6IjY2MGY2MzcxZjI4ODM4MDE2NTBlYzc3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bckJWNccLHs-GkUiS1Pmkg7MnueDk1Fzfbxw7UNHnHE",
      },
    };

    return fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => response)
      .catch((err) => err);
  }

  return (
    <MovieContext.Provider
      value={{
        getMovies,
        details,
        addToWatchlist,
        getWatchList,
        removeFromWatchList,
        trendingMovies,
        upComing,
        popular,
        topRated,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}
