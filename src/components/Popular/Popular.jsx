import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../../Context/MovieContext";
import { Swiper, SwiperSlide } from "swiper/react";

import { Link } from "react-router-dom";

function Popular() {
  let { popular } = useContext(MovieContext);
  let [popularList, setPopularList] = useState([]);
  async function getPopular() {
    let res = await popular();
    console.log(res);
    if (res) {
      setPopularList(res.results);
    }
  }
  useEffect(() => {
    getPopular();
  },[]);
  return (
    <>
      <div className="container">
        <h2 className="text-2xl   font-semibold">What is Popular</h2>
      </div>
      <Swiper
        spaceBetween={10}
        slidesPerView={7}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <>
          {popularList?.map((popMovie) => {
            return (
              <SwiperSlide
                key={popMovie.id}
                className=" cursor-pointer "
             
              >
                <Link to={`/details/${popMovie.id}`}>
                  <div className="relative">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${popMovie?.poster_path}`}
                      alt=""
                      className="mb-5"
                    />
                    <div className=" rounded-full w-10 h-10 flex justify-center items-center text-white text-sm bg-[#12B6DC] absolute bottom-[-15px] left-[10px]">
                      {Math.ceil(popMovie.vote_average * 10)}
                      <span className="  absolute top-[2px] right-[2px] scale-50 ">
                        %
                      </span>
                    </div>
                  </div>
                  <div
                    className="h-12"
                  >
                    <h2 className="font-semibold ">{popMovie?.title}</h2>

                    <p className="text-gray-400 ">{popMovie.release_date}</p>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </>
      </Swiper>
    </>
  );
}

export default Popular;
