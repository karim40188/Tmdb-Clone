import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../../Context/MovieContext";

function TopRated() {
  let { topRated } = useContext(MovieContext);
  let [topRatedMovies, setTopRatedMovies] = useState([]);
  async function getTopRated() {
    let res = await topRated();
    console.log(res);
    setTopRatedMovies(res.results);
  }
  useEffect(() => {
    getTopRated();
  }, []);
  return (
    <div>
      <div className="container">
        <h2>Top Rated Movies</h2>

        <div className="flex flex-wrap">
          {topRatedMovies.map((movie) => {
            return (
              <div key={movie.id} className="w-1/5 p-2 cursor-pointer">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TopRated;
