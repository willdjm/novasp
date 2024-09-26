"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from "swiper/modules";

export function Parceiros() {
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  const images = [
    { src: "/img-parceiros1.png" },
    { src: "/img-parceiros2.png" },
    { src: "/img-parceiros3.png" },
    { src: "/img-parceiros4.png" },
    { src: "/img-parceiros5.png" },
    { src: "/img-parceiros6.png" },
    { src: "/img-parceiros7.png" },
    { src: "/img-parceiros8.png" },
    { src: "/img-parceiros9.png" },
    { src: "/img-parceiros10.png" },
  ];

  const slidesPerView = windowWidth ? (windowWidth < 768 ? 2 : 6) : 1; // Define um valor padrão se windowWidth for undefined

  return (
    <section
      id="parceiros"
      className="flex flex-col justify-center items-center md:py-20 py-10 px-5 bg-red-300"
    >
      <div className="flex flex-col items-center justify-center md:gap-8 gap-5 md:max-w-6xl w-full">
        <h3 className="text-blue-950 text-2xl md:text-5xl font-bold py-10">
          Nossos <span className="text-amber-600">parceiros</span>
        </h3>

        <div className="relative w-full md:pt-10">
          <Swiper
            spaceBetween={30}
            slidesPerView={slidesPerView}
            grabCursor={true} // Permitir o arrasto em qualquer largura
            loop={true} // Carrossel infinito
            pagination={{ clickable: true }} // Adicionando a paginação
            modules={[Pagination]} // Importando o módulo de paginação
            onSlideChange={() => console.log('slide change')}
            onTransitionEnd={() => console.log('transition end')}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <picture>
                  <img
                    src={image.src}
                    alt={`Parceiro ${index + 1}`}
                    className="max-w-full h-auto"
                  />
                </picture>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
