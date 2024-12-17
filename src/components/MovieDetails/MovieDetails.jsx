import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../../Context/MovieContext";
import { useParams } from "react-router-dom";

function MovieDetails() {
  let params = useParams();
  console.log(params.id);
  let [movieDetails, setMovieDetails] = useState({});
  let { details } = useContext(MovieContext);
  useEffect(() => {
    async function getDetails() {
      let res = await details(params.id);
      setMovieDetails(res);
      console.log(res);
    }
    getDetails();
  }, []);
  return (
    <div className="flex flex-wrap justify-around my-5">
      <div className="w-1/4">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
          className="object-cover object-center"
          alt=""
        />
      </div>
      <div className="w-2/4  text-gray-700">
        <h2 className="text-3xl mb-3 ">{movieDetails.title}</h2>
        <p>{movieDetails.overview}</p>
        <ul className="flex gap-5 my-3">
          {movieDetails?.production_companies?.map((prod) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <li className="">
                <img
                className="w-full object-contain bg-contain cursor-pointer"
                  src={`https://image.tmdb.org/t/p/w500/${prod.logo_path}`}
                  alt=""
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default MovieDetails;
