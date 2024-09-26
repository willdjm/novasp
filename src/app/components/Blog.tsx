"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import "swiper/swiper-bundle.css"; // Importa os estilos do Swiper
import { Navigation } from "swiper/modules";

export function Blog() {
  const cards = [
    {
      img: "/img-blog1.png",
      date: "Há 2 meses",
      title: "Caixa faz leilão com mais de 560 imóveis e valores ...",
    },
    {
      img: "/img-blog2.png",
      date: "Há 2 meses",
      title: "Caixa faz leilão com mais de 560 imóveis e valores ...",
    },
    {
      img: "/img-blog3.png",
      date: "Há 2 meses",
      title: "Caixa faz leilão com mais de 560 imóveis e valores ...",
    },
  ];

  return (
    <section
      id="blog"
      className="flex flex-col justify-center items-center md:py-20 py-10 px-4"
    >
      <div className="flex flex-col items-center justify-center md:gap-8 gap-5 md:max-w-6xl w-full">
        <div className="flex items-center md:justify-between justify-center w-full pb-7">
        <h3 className="text-amber-600 text-3xl md:text-5xl font-semibold">
        Blog <span className="text-blue-950 text-base font-bold md:text-4xl uppercase">NOVA SP INC</span>
        </h3>
        <button className="bg-amber-600 text-white py-1 px-6 rounded-lg hidden md:flex">
        Acesse o Blog
</button>
        </div>

        {/* Container para cards no desktop */}
        <div className="hidden md:flex gap-4 w-full justify-between rounded">
          {cards.map((card, index) => (
            <div key={index} className="max-w-xs cursor-pointer bg-white p-2 shadow-lg">
              <picture>
                <img className="w-full object-cover object-center" src={card.img} alt="product" />
              </picture>
              <div>
                <div className="my-6 flex items-center justify-between px-4">
                  <p>{card.date}</p>
                </div>
                <div className="my-4 flex items-center justify-between px-4">
                  <p className="font-bold text-black">{card.title}</p>
                </div>
                <div className="my-4 flex items-center justify-between px-4">
                  <BsFillBookmarkHeartFill className="text-2xl" />
                  <a href="#" className="underline">Ler mais</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Container para o Swiper no mobile */}
        <div className="md:hidden w-full">
          <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={false} // Desabilita as setas
            className="w-full"
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index} className="flex-shrink-0">
                <div className="max-w-xs cursor-pointer bg-white p-2 shadow">
                  <picture>
                    <img className="w-full object-cover object-center" src={card.img} alt="product" />
                  </picture>
                  <div>
                    <div className="my-6 flex items-center justify-between px-4">
                      <p>{card.date}</p>
                    </div>
                    <div className="my-6 flex items-center justify-between px-4">
                      <p className="font-bold text-gray-500">{card.title}</p>
                    </div>
                    <div className="my-4 flex items-center justify-between px-4">
                      <BsFillBookmarkHeartFill className="text-2xl" />
                      <a href="#" className="underline">Ler mais</a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <button className="bg-amber-600 text-white py-1 px-4 rounded-md md:hidden flex">
        Acesse o Blog
</button>

      </div>
    </section>
  );
}
