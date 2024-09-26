
export function Video() {
  return (
    <div id="about" className="relative w-full h-screen">
      <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
        <source src="/video.mp4" type="video/mp4" />
        Seu navegador não suporta vídeo.
      </video>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center md:justify-center justify-end bg-blue-950 bg-opacity-80 px-4">
        <div className="w-full max-w-6xl flex flex-col items-center justify-center py-5">
          <div className="flex flex-col text-2xl md:text-5xl w-full text-white pb-10">
            <p className="uppercase">O JEITO</p>
            <p className="uppercase italic">NOVA SÃO PAULO</p>
            <p className="uppercase">DE INCORPORAR!</p>
          </div>
          <div className="flex flex-col w-full text-white">
            <p className="max-w-2xl text-xl md:text-3xl">
              Somos um grupo dedicados a transformar a vida das pessoas por meio da construção de seus futuros lares.
            </p>
            <div className="flex md:flex-row flex-col md:justify-between items-center w-full pt-5">
              <p className="md:max-w-4xl text-base md:text-xl hidden md:flex">
                A Nova SP Inc abrange a Imobiliária Nova São Paulo que conta com larga experiência no mercado imobiliário e uma equipe de profissionais altamente qualificados, estamos comprometidos em oferecer as melhores opções de moradia para nossos clientes.
              </p>
              <button className="bg-amber-600 border text-white py-2 px-6 rounded-md mt-4 flex">
              Saiba mais
              </button>
            </div>

            <div className="grid md:grid-cols-4 grid-cols-2 w-full items-center justify-center mt-5 pt-10 border-t-4 border-amber-600">
            <div className="flex items-center justify-center gap-2">
                        <picture>
                            <img
                                src="/icon-video1.png"
                                className="mr-2"
                                alt="Background"
                            />
                        </picture>
                        <span className='md:text-lg text-amber-600 text-sm flex font-bold'>55 anos de experiência</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <picture>
                            <img
                                src="/icon-video2.png"
                                className="mr-2"
                                alt="Background"
                            />
                        </picture>
                        <span className='md:text-lg text-amber-600 text-sm flex font-bold mt-3 md:mt-0'>Especialistas no Secovi</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <picture>
                            <img
                                src="/icon-video3.png"
                                className="mr-2"
                                alt="Background"
                            />
                        </picture>
                        <span className='md:text-lg text-amber-600 text-sm flex font-bold mt-3 md:mt-0'>+ de 20 parcerias</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <picture>
                            <img
                                src="/icon-video4.png"
                                className="mr-2"
                                alt="Background"
                            />
                        </picture>
                        <span className='md:text-lg text-amber-600 text-sm flex font-bold'>Sucesso de vendas</span>
                    </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
