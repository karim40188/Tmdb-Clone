import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../../Context/MovieContext";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
function Home() {
  let [movies, setMovies] = useState([]);
  let { getMovies, addToWatchlist } = useContext(MovieContext);
  // eslint-disable-next-line react-hooks/exhaustive-deps

  async function addMovie(id) {
    let res = await addToWatchlist(id);
    console.log(res);
    if (res) {
      toast.success("movie add successfully", {
        position: "bottom-right",
      });
    } else {
      toast.error("sorry , there is error");
    }
  }
  useEffect(() => {
    async function fetchMovies() {
      let res = await getMovies();
      if (res) {
        setMovies(res.results);
      }
    }
    fetchMovies();
  }, []);

  return (
    <>
      <h2 className="text-3xl ">Movies</h2>
      <div className="flex flex-wrap">
        {movies?.map((movie) => {
          return (
            <div key={movie.id} className="w-1/5 p-2 cursor-pointer">
              <Link to={`/details/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                  alt=""
                />
                <h2 className="font-semibold">{movie?.title}</h2>
              </Link>

              <button
                onClick={() => {
                  addMovie(movie.id);
                }}
                className="bg-sky-400 px-4 py-2 rounded-lg text-white my-3 block mx-auto"
              >
                Add To Watchlist
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
