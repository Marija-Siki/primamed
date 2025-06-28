import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  {
    src: "/partneri/medigroup.jpeg",
    alt: "Medigroup",
  },
  {
    src: "/partneri/generali.jpg",
    alt: "Delta Generali",
  },
  {
    src: "/partneri/globos.webp",
    alt: "Globos osiguranje",
  },
  {
    src: "/partneri/milenijum.jpeg",
    alt: "Milenijum osiguranje",
  },
  {
    src: "/partneri/triglav.jpeg",
    alt: "Triglav osiguranje",
  },
  {
    src: "/partneri/wiener.jpg",
    alt: "Wiener osiguranje",
  },
  {
    src: "/partneri/benefiti.jpeg",
    alt: "Benefiti.rs",
  },
];

const Partners = () => {
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
          <h1 className="text-4xl font-semibold text-center lg:text-start">
            Naši partneri
          </h1>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {images.map((image) => (
          <div
            key={image.alt}
            className="flex justify-start align-center aspect-[4/3] w-full overflow-hidden object-center"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
