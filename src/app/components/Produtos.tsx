"use client"; // Indica que este é um componente do cliente

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Navigation } from "swiper/modules";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

export function Produtos() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Define 768px como o limite para mobile
    };

    handleResize(); // Chama na montagem
    window.addEventListener('resize', handleResize); // Adiciona o listener
    return () => window.removeEventListener('resize', handleResize); // Limpa o listener
  }, []);

  const cards = [
    {
      img: "/img-produtos.png",
      cidade: "Saúde",
      estado: "São Paulo - SP",
      title: "Caixa faz leilão com mais de 560 imóveis e valores ...",
    }, {
      img: "/img-produtos.png",
      cidade: "Saúde",
      estado: "São Paulo - SP",
      title: "Caixa faz leilão com mais de 560 imóveis e valores ...",
    }, {
      img: "/img-produtos.png",
      cidade: "Saúde",
      estado: "São Paulo - SP",
      title: "Caixa faz leilão com mais de 560 imóveis e valores ...",
    }, {
      img: "/img-produtos.png",
      cidade: "Saúde",
      estado: "São Paulo - SP",
      title: "Caixa faz leilão com mais de 560 imóveis e valores ...",
    }, {
      img: "/img-produtos.png",
      cidade: "Saúde",
      estado: "São Paulo - SP",
      title: "Caixa faz leilão com mais de 560 imóveis e valores ...",
    },
    // Adicione os outros cards aqui...
  ];

  return (
    <section
      id="CustomerReviews"
      className="flex flex-col justify-center items-center md:py-20 py-10 px-4 bg-gradient-to-r from-neutral-100/0 to-neutral-100"
    >
      <div className="flex flex-col items-center justify-center md:gap-8 gap-5 md:max-w-6xl w-full">
      <h3 className="text-blue-950 text-2xl md:text-5xl font-bold pb-10 w-full text-left">
          Produtos <span className="text-amber-600">parceiros</span>
        </h3>

        {/* Container para Swiper */}
        <div className="relative w-full overflow-visible">
          <Swiper

            modules={[Navigation]}
            spaceBetween={20} // Diminui o espaço entre os cards
            slidesPerView={1} // Valor padrão para mobile
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 3, // 3 slides por vez em desktop
              },
            }}
            navigation={isMobile ? false : {
              nextEl: '.custom-swiper-button-next',
              prevEl: '.custom-swiper-button-prev',
            }} // Habilita navegação apenas no desktop
            loop
            className="w-full"
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index} className="">
                <div className="max-w-xs cursor-pointer bg-white p-2 shadow-md border rounded relative group overflow-hidden">
                  <div className="absolute flex items-center justify-center gap-4 h-10 top-4 left-0 text-black text-center  z-10">

                    <div className="relative">
                      <picture className="">
                        <img
                          src="/bg-faixa.png"
                          className="w-full md:h-10"
                          alt="Background"
                        />
                      </picture>

                      <div className="absolute inset-0 flex items-center justify-center text-black z-40 gap-3 py-2">
                        <h4 className="text-sm font-bold">Parcerias</h4>
                        <picture>
                          <img
                            src="/icon-empreendimento.png"
                            className=""
                            alt=""
                          />
                        </picture>
                      </div>
                    </div>

                  </div>
                  <div className="overflow-hidden rounded">
                    <picture>
                      <img className="w-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110" src={card.img} alt="product" />
                    </picture>
                  </div>
                  <div className="py-3 z-0">
                    <div className="flex items-center justify-start mb-2">
                      <FaMapMarkerAlt className="mr-2 text-2xl text-amber-600" />
                      <div className='flex flex-col items-start text-amber-600'>
                        <span className='md:text-base text-sm'>{card.cidade}</span>
                        <span className="md:text-base text-sm">{card.estado}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-start mb-2 w-full text-left">
                      <picture>
                        {/* Imagem de desktop */}
                        <img
                          src="/icon-banner-1.png"
                          className="mr-2"
                          alt="Background"
                        />
                      </picture>
                      <span className='text-sm mr-2'>24 a 41m </span>
                      <span className="text-sm border-l-2 pl-2 mr-2"> Studios</span>
                      <span className="text-sm border-l-2 pl-2 mr-2"> 1 ou 2 Dorms.</span>
                    </div>
                    <div className="flex items-center justify-center mb-2">
                      <picture>
                        {/* Imagem de desktop */}
                        <img
                          src="/icon-banner-2.png"
                          className="mr-2"
                          alt="Background"
                        />
                      </picture>
                      <span className='md:text-base text-sm text-left w-full ml-2'>Lazer na cobertura</span>
                    </div>
                    <div className="my-4 flex items-center justify-end px-4 border-t-2">
                      <picture>
                        <img className="w-full object-cover object-center pt-2" src='/logo-produtos.png' alt="product" />
                      </picture>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            {/* Adiciona as setas personalizadas */}
            {!isMobile && (
              <>
                <div className="swiper-button-prev custom-swiper-button-prev"></div>
                <div className="swiper-button-next custom-swiper-button-next"></div>
              </>
            )}
          </Swiper>
        </div>

        <button className="bg-amber-600 text-white py-2 px-6 rounded-lg flex md:mt-10">
        Ver todos
        </button>
      </div>

      {/* Estilos CSS para as setas */}
      <style jsx>{`
        .custom-swiper-button-prev, .custom-swiper-button-next {
          color: #000; /* Cor das setas */
          width: 40px; /* Ajuste a largura */
          height: 40px; /* Ajuste a altura */
          position: absolute; /* Para evitar que as setas fiquem em cima das fotos */
          top: 50%; /* Centraliza verticalmente */
          transform: translateY(-50%); /* Ajusta a posição vertical */
          z-index: 10; /* Mantém as setas acima de outros elementos */
        }

        .custom-swiper-button-prev {
          left: -10px; /* Ajuste a distância da borda esquerda */
        }

        .custom-swiper-button-next {
          right: -10px; /* Ajuste a distância da borda direita */
        }
      `}</style>
    </section>
  );
}
