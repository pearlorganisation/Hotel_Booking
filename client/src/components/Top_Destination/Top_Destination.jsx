import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

// import required modules
import { Pagination } from "swiper/modules";

const data = [
  {
    img: "destinationImg.jpg",
    title: "New Jersey",
    no_hotels: 7,
  },
  {
    img: "destinationImg.jpg",
    title: "New Jersey2",
    no_hotels: 7,
  },
  {
    img: "destinationImg.jpg",
    title: "New Jersey3",
    no_hotels: 7,
  },
  {
    img: "destinationImg.jpg",
    title: "New Jersey4",
    no_hotels: 7,
  },
  {
    img: "destinationImg.jpg",
    title: "New Jersey5",
    no_hotels: 7,
  },
  {
    img: "destinationImg.jpg",
    title: "New Jersey6",
    no_hotels: 7,
  },
  {
    img: "destinationImg.jpg",
    title: "New Jersey7",
    no_hotels: 7,
  },
  {
    img: "destinationImg.jpg",
    title: "New Jersey8",
    no_hotels: 7,
  },
  {
    img: "destinationImg.jpg",
    title: "New Jersey9",
    no_hotels: 7,
  },
  {
    img: "destinationImg.jpg",
    title: "New Jersey10",
    no_hotels: 7,
  },
  {
    img: "destinationImg.jpg",
    title: "New Jersey10",
    no_hotels: 7,
  },
  {
    img: "destinationImg.jpg",
    title: "New Jersey10",
    no_hotels: 7,
  },
  {
    img: "destinationImg.jpg",
    title: "New Jersey10",
    no_hotels: 7,
  },
  {
    img: "destinationImg.jpg",
    title: "New Jersey10",
    no_hotels: 7,
  },
  {
    img: "destinationImg.jpg",
    title: "New Jersey10",
    no_hotels: 7,
  },
];

const Top_Destination = () => {
  const swiperRef = useRef(null);
  

  const goNext = () => {
    swiperRef.current.swiper.slideNext()
  };

  const goPrev = () => {
    
    swiperRef.current.swiper.slidePrev()
  };

  return (
    <div >
      <div className="flex justify-center items-center ">
        <h1 className="text-4xl font-bold tracking-widest">Top Destinations</h1>
      </div>
      <div className=" relative  flex justify-center items-center m-3 p-10">
        <div className="bg-white border rounded-full absolute flex justify-center  top-49 left-0">
          <button onClick={goPrev}>
            <FaAngleLeft size={32} />
          </button>
        </div>
        <div className="bg-white border rounded-full flex justify-center  absolute top-50 right-0">
          <button onClick={goNext}>
            <FaAngleRight size={32} />
          </button>
        </div>
        <Swiper
          ref={swiperRef}
          modules={[Pagination]}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
          }}
          className="mySwiper  "
        >
          {data.map((item) => {
            return (
              <div>
                <SwiperSlide>
                  <div className="flex flex-col justify-center  items-center rounded-full p-5">
                    <div className="overflow-hidden rounded-full ">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="hover:scale-125 cursor-pointer hover:transition-all"
                    />
                    </div>
                    <p className="text-xl font-bold">
                      <button className="hover:text-blue-600 tracking-widest">
                        {item.title}
                      </button>
                    </p>
                    <p className="font-mono text-xl">
                      <button className="hover:text-blue-600">
                        {item.no_hotels} hotels
                      </button>
                    </p>
                  </div>
                </SwiperSlide>
              </div>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Top_Destination;
