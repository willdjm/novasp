"use client"

import { Navbar } from "./Navbar";

export const BannerHome = () => {
    return (
        <>
            <div className="relative w-full">
                <picture className="relative w-full h-full">
                    {/* Imagem de desktop */}
                    <img
                        src="/banner.png"
                        className="w-full h-full hidden md:block object-cover"
                        alt="Background"
                    />
                    {/* Imagem de mobile */}
                    <img
                        src="/banner-mobile.png"
                        className="w-full h-full block md:hidden object-cover"
                        alt="Background"
                    />
                </picture>

                {/* Navbar */}
                <div className="absolute top-0 left-0 w-full z-50">
                    <Navbar />
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-end text-white z-40 bg-black/40 py-14 md:py-14">
                    <div className="flex w-full max-w-5xl items-center justify-between text-center md:text-left px-4 md:px-0">
                        <div className="w-full">
                            <div className="flex flex-col items-start justify-center">
                                <div className="flex items-center">
                                    <p className="text-xl md:text-5xl text-left">Lançamento Feel Saúde</p>
                                    <picture>
                                        {/* Imagem de desktop */}
                                        <img
                                            src="/img-banner.png"
                                            className="mt-2"
                                            alt="Background"
                                        />
                                    </picture>
                                </div>

                            </div>
                        </div>
                        <div className="flex md:w-1/3 w-full items-center justify-center md:justify-start">
                            <button className="bg-blue-400 text-white py-2 px-5 border rounded-md flex text-sm md:text-base">
                                Saiba mais
                            </button>
                        </div>
                    </div>
                    <div className="flex w-full md:max-w-5xl items-center justify-start text-center md:text-left text-sm md:text-3xl px-4 md:px-0 pt-5 gap-3 md:gap-5">
                        <p>Studios</p>
                        <p className="border-l-2 pl-4">1 a 2 dormitórios</p>
                        <p className="border-l-2 pl-4">Saúde - SP</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center py-6 bg-red-300 px-4">
                <div className="grid md:grid-cols-5 grid-cols-2 items-center justify-center w-full max-w-6xl">
                    <div className="flex items-center justify-center gap-2">
                        <picture>
                            {/* Imagem de desktop */}
                            <img
                                src="/icon-banner-1.png"
                                className="mt-2"
                                alt="Background"
                            />
                        </picture>
                        <span className='md:text-base text-sm flex w-20'>Área útil
                            24 a 41m2</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <picture>
                            {/* Imagem de desktop */}
                            <img
                                src="/icon-banner-2.png"
                                className="mt-2"
                                alt="Background"
                            />
                        </picture>
                        <span className='md:text-base text-sm flex w-28'>Área de laze
                            completa</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <picture>
                            {/* Imagem de desktop */}
                            <img
                                src="/icon-banner-3.png"
                                className="mt-2"
                                alt="Background"
                            />
                        </picture>
                        <span className='md:text-base text-sm flex w-20'>Com ou
                            sem vaga</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <picture>
                            {/* Imagem de desktop */}
                            <img
                                src="/icon-banner-4.png"
                                className="mt-2"
                                alt="Background"
                            />
                        </picture>
                        <span className='md:text-base text-sm flex w-28'>A 5 minutos
                            à pé do Metrô</span>
                    </div>
                    <div className="flex items-center justify-center">
                        <picture>
                            {/* Imagem de desktop */}
                            <img
                                src="/img-mcmv.png"
                                className="mt-2"
                                alt="Background"
                            />
                        </picture>
                    </div>
                </div>
            </div>
        </>
    );
}
