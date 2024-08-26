import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../../Context/MovieContext";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import bannerImg from "../../assets/wallpaperflare.com_wallpaper.jpg";
import UpComing from "../UpComing/UpComing";
import Popular from "../Popular/Popular";

function Home() {
  let { trendingMovies } = useContext(MovieContext);
  let [trending, setTrending] = useState([]);

  async function displayTreding() {
    let res = await trendingMovies();
    console.log(res);
    if (res) {
      setTrending(res?.results);
    }
  }
  useEffect(() => {
    displayTreding();
  }, []);

  return (
    <>
      <div className="w-full h-[350px]  relative">
        <img
          className="w-full h-full object-center  object-cover "
          src={bannerImg}
          style={{ imageRendering: "crisp-edges" }}
          alt=""
        />

        <div className="container mt-10 absolute top-1/2 -translate-y-1/2 z-50 left-1/2 -translate-x-1/2 text-white">
          <h3 className="text-3xl font-semibold ">Welcome.</h3>
          <p className="text-2xl">
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
          <input
            type="text"
            className=" w-full p-2 rounded-full my-5 text-slate-900"
          />
        </div>
        <div className="bg-gradient-to-r from-sky-900 to-sky-400 absolute top-0 bottom-0 left-0 right-0 opacity-65"></div>
      </div>

      <div className="container">
        <h2 className="text-2xl   font-semibold">Trending</h2>
      </div>
      <Swiper
        spaceBetween={10}
        slidesPerView={7}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="px-4 my-3"
      >
        <>
          {trending?.map((trend) => {
            return (
              <SwiperSlide key={trend.id} className=" cursor-pointer relative">
                <Link to={`/details/${trend.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${trend?.poster_path}`}
                    alt=""
                  />
                  {trending ? (
                    <div className=" rounded-full w-10 h-10 flex justify-center items-center text-white text-sm bg-[#12B6DC] absolute bottom-[19%] left-[10px]">
                      {Math.ceil(trend.vote_average * 10)}
                      <span className="  absolute top-[2px] right-[2px] scale-50 ">
                        %
                      </span>
                    </div>
                  ) : (
                    ""
                  )}

                  <h2 className="font-semibold h-12 pt-6">{trend?.title}</h2>

                  <p className="text-gray-400">{trend.release_date}</p>
                </Link>
              </SwiperSlide>
            );
          })}
        </>
      </Swiper>

      <div>
        <UpComing />
      </div>

      <div>
        <Popular />
      </div>
    </>
  );
}

export default Home;
