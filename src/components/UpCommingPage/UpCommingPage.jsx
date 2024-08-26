import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../../Context/MovieContext";
import { Link } from "react-router-dom";

function UpComingPage() {
  let [upComingMovies, setUpComingMovies] = useState([]);
  let { upComing } = useContext(MovieContext);
  async function fetchUpComing() {
    let res = await upComing();
    console.log(res);
    if (res) {
      setUpComingMovies(res.results);
    }
  }

  useEffect(() => {
    fetchUpComing();
  }, []);
  return (
    <>
      <div className=" relative py-16 px-4">
        <h2 className=" font-bold text-2xl relative z-50">Upcoming Movies</h2>

        <div
          className="flex flex-wrap"
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
            position: "relative",
            zIndex: 2,
          }}
        >
          {upComingMovies.map((upCom) => {
            return (
              <div key={upCom.id} className="w-1/5 p-2">
                <Link to={`/details/${upCom.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${upCom?.poster_path}`}
                    alt=""
                    className="w-full object-cover object-center"
                  />
                  <h3 className="text-white">{upCom.original_title}</h3>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default UpComingPage;
