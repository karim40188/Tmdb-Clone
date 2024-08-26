import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../../Context/MovieContext";
import { Link } from "react-router-dom";

function WatchList() {
  let { getWatchList, removeFromWatchList } = useContext(MovieContext);
  let [watchList, setWatchList] = useState([]);
  async function showWatchList() {
    let res = await getWatchList();
    console.log(res);
    if (res) {
      setWatchList(res.results);
    }
  }

  async function removeItem(id) {
    let res = await removeFromWatchList(id);
    if (res.success) {
      let updatedWatchList = watchList.filter((movie) => {
        return movie.id !== id;
      });
      setWatchList(updatedWatchList);
    }
  }

  useEffect(() => {
    showWatchList();
  }, []);
  return (
    <>
      {watchList.length == 0 ? (
        <h2 className="text-lg font-bold text-red-400 text-center my-4">WatchList is Empty</h2>
      ) : (
        <div className="flex flex-wrap">
          {watchList?.map((movie) => {
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
                    removeItem(movie.id);
                  }}
                  className="text-red-600  my-3 block mx-auto"
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default WatchList;
