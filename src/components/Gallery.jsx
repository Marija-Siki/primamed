import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Gallery = () => {
  const data = [
    {
      img: "/src/assets/img/cekaonica.jpg",
    },
    {
      img: "/src/assets/img/kid.jpeg",
    },
    {
      img: "/src/assets/img/guest.jpeg",
    },
    {
      img: "/src/assets/img/vezbanje.jpeg",
    },
    {
      img: "/src/assets/img/aparati.jpeg",
    },
    {
      img: "/src/assets/img/laser.jpeg",
    },
    {
      img: "/src/assets/img/struja.jpeg",
    },
    {
      img: "/src/assets/img/sala.jpeg",
    },
    {
      img: "/src/assets/img/masaza.jpeg",
    },
    {
      img: "/src/assets/img/ultrazvuk.jpeg",
    },
    {
      img: "/src/assets/img/dryNeedling.jpeg",
    },
    {
      img: "/src/assets/img/zgrada.jpeg",
    },
  ];

  const slider = useRef(null);

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col justify-center lg:px-32 px-5 pt-6 my-32 lg:my-0 lg:min-h-screen">
      <div className=" flex flex-col items-center lg:flex-row justify-between mb-10 lg:mb-0">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            Galerija
          </h1>
        </div>
        <div className="flex gap-5 mt-4 lg:mt-0">
          <button
            className=" bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
            onClick={() => slider.current.slickPrev()}
          >
            <FaArrowLeft size={25} />
          </button>
          <button
            className=" bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
            onClick={() => slider.current.slickNext()}
          >
            <FaArrowRight size={25} />
          </button>
        </div>
      </div>
      <div className="mt-5">
        <Slider ref={slider} {...settings}>
          {data.map((e, index) => (
            <div key={index}>
              <div className="">
                <img
                  src={e.img}
                  alt="gallery"
                  className="h-[300px] lg:h-[500px] object-cover rounded-xl w-full"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;
