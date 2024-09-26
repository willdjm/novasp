"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";

export function Siga() {
  const [windowWidth, setWindowWidth] = useState(1024);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const images = [
    { src: "./img-instagram1.png", alt: "Criacao 1" },
    { src: "./img-instagram2.png", alt: "Criacao 2" },
    { src: "./img-instagram3.png", alt: "Criacao 3" },
  ];

  const slidesPerView = windowWidth < 768 ? 1 : images.length;

  return (
    <section
      id="CustomerReviews"
      className="flex flex-col justify-center items-center md:py-20 py-10 px-4 bg-amber-600"
    >
      <div className="flex flex-col items-center justify-center md:gap-8 gap-5 md:max-w-6xl w-full">
        <h3 className="text-white text-3xl md:text-5xl font-semibold md:py-10">
          Siga <span className="text-blue-950 text-base font-bold md:text-4xl uppercase">NOVA SP INC</span>
        </h3>

        <div className="relative w-full">
          <Swiper
            spaceBetween={30}
            slidesPerView={slidesPerView}
            grabCursor={windowWidth < 768} // Cursor de arraste somente no mobile
            loop={windowWidth < 768} // Loop somente no mobile
            onSlideChange={() => console.log('slide change')}
            onTransitionEnd={() => console.log('transition end')}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <picture>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={`w-full h-auto object-cover ${windowWidth < 768 ? 'max-w-[90%] mx-auto' : ''}`}
                  />
                </picture>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="flex items-center justify-center md:py-20 py-10 md:gap-10 gap-5">
        <a href="#" className="group relative md:h-20 md:w-20 w-14 h-14 border border-white transition duration-300 flex items-center justify-center hover:rounded-md hover:bg-pink-500">
          <picture>
            <FaInstagram

              className="transition text-white text-4xl duration-300 relative z-10 transform group-hover:scale-150"
            />
          </picture>
        </a>

        <a href="#" className="group relative md:h-20 md:w-20 w-14 h-14 border border-white transition duration-300 flex items-center justify-center hover:rounded-md hover:bg-blue-500">
          <picture>
            <TfiLinkedin

              className="transition text-white text-4xl duration-300 relative z-10 transform group-hover:scale-150"
            />
          </picture>
        </a>

        <a href="#" className="group relative md:h-20 md:w-20 w-14 h-14 border border-white transition duration-300 flex items-center justify-center hover:rounded-md hover:bg-blue-600">
          <picture>
            <FaFacebook

              className="transition text-white text-4xl duration-300 relative z-10 transform group-hover:scale-150"
            />
          </picture>
        </a>
        
        <a href="#" className="group relative md:h-20 md:w-20 w-14 h-14 border border-white transition duration-300 flex items-center justify-center hover:rounded-md hover:bg-black">
          <picture>
            <FaTiktok

              className="transition text-white text-4xl duration-300 relative z-10 transform group-hover:scale-150"
            />
          </picture>
        </a>
      </div>
    </section>
  );
}
