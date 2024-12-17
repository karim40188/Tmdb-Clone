import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../../Context/MovieContext";
import { Swiper, SwiperSlide } from "swiper/react";

function UpComing() {
  let [upComingMovies, setUpComingMovies] = useState([]);
  let [backgroundImage, setBackgroundImage] = useState(
    "https://image.tmdb.org/t/p/w500/5aj8vVGFwGVbQQs26ywhg4Zxk2L.jpg"
  );
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
      <div
        className=" relative py-16 px-4"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute top-0 left-0 right-0 bottom-0"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        ></div>

        <Swiper
          spaceBetween={10}
          breakpoints={{
            0:{
              slidesPerView:1,
            },
            640:{
              slidesPerView:3
            },
            1024:{
              slidesPerView:7
            }
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
            position: "relative",
            zIndex: 2,
          }}
        >
          {upComingMovies.map((upCom) => {
            return (
              <SwiperSlide
                key={upCom.id}
                onMouseEnter={() => {
                  setBackgroundImage(
                    `https://image.tmdb.org/t/p/w500/${upCom?.poster_path}`
                  );
                }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${upCom?.poster_path}`}
                  alt=""
                />
                <h3 className="text-white">{upCom.original_title}</h3>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}

export default UpComing;
