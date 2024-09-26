import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaLinkedin, FaFacebook, FaTiktok, FaChevronLeft, FaChevronRight, FaPhoneAlt } from 'react-icons/fa';
import { TfiLinkedin } from 'react-icons/tfi';

export function Footer() {
  return (
    <>
      {/* FOOTER MOBILE */}
      <footer className="bg-blue-950 text-white py-10 px-4 hidden md:block">
        <div id='contato' className="container mx-auto flex flex-col md:flex-row md:justify-between justify-center items-start max-w-6xl w-full">

          {/* Primeira coluna */}
          <div className="flex flex-col items-start md:gap-5 gap-3 w-full md:w-1/3">
            <img src="/logo-footer.png" alt="Logo" className="md:mb-4 w-32 md:w-auto" />
            <div className='md:text-xl text-base'>
              <p className="uppercase">O JEITO</p>
              <p className="uppercase italic">NOVA SÃO PAULO</p>
              <p className="uppercase">DE INCORPORAR!</p>
              <a href='#' target='_blank' rel="noreferrer" className="text-white underline mt-3 text-base">Saiba mais...</a>
            </div>
          </div>

          <div className='flex flex-col items-start justify-between gap-5 md:gap-0 mt-10 md:mt-0 w-full md:w-1/3'>

            {/* Segunda coluna */}
            <ul className='flex flex-col justify-between gap-4'>
              <li className="mb-1 md:text-base"><a href="#" target='_blank' rel="noreferrer" className="">Home</a></li>
              <li className="mb-1 md:text-base"><a href="#" target='_blank' rel="noreferrer" className="">Sobre nós</a></li>
              <li className="mb-1 md:text-base"><a href="#" target='_blank' rel="noreferrer" className="">Empreendimentos</a></li>
              <li className="mb-1 md:text-base"><a href="#" target='_blank' rel="noreferrer" className=" flex items-center"><FaChevronRight className='mr-2' /> NOVA SP INC</a></li>
              <li className="mb-1 md:text-base"><a href="#" target='_blank' rel="noreferrer" className=" flex items-center"><FaChevronRight className='mr-2' /> Parceiros</a></li>
              <li className="mb-1 md:text-base"><a href="#" target='_blank' rel="noreferrer" className="">Blog</a></li>
              <li className="mb-1 md:text-base"><a href="#" target='_blank' rel="noreferrer" className="">Fale Conosco</a></li>
            </ul>
          </div>

          {/* Terceira coluna */}
          <div className="flex flex-col items-start justify-between gap-3 w-full md:w-1/3">
            <div className="flex md:flex-row flex-col items-center mb-2 gap-3">
              <a href='https://wa.me/+5511976312158' target='_blank' rel="noreferrer" className="flex items-center mb-2">
                <FaWhatsapp className="mr-2 text-3xl" />
                <p className='md:text-base text-sm'>11 <span className='md:text-xl'> 97631-2158 </span></p>
              </a>
              <a href='tel:11976312158' target='_blank' rel="noreferrer" className="flex items-center mb-2">
                <FaPhoneAlt className="mr-2 text-xl" />
                <p className='md:text-base text-sm'>11 <span className='md:text-xl'> 2198-4970 </span></p>
              </a>
            </div>
            <a href='mailto:contato@novaspinc.com.br' target='_blank' rel="noreferrer" className="flex items-center mb-2">
              <FaEnvelope className="mr-2 text-2xl" />
              <span className='md:text-base text-sm hidden md:flex'>email@exemplo.com</span>
              <span className='md:text-base text-sm md:hidden flex'>email</span>
            </a>
            <div className="flex items-start mb-2">
              <div className="flex mb-2">
                <FaMapMarkerAlt className="mr-2 text-2xl" />
                <div className='flex flex-col items-start'>
                  <span className='md:text-base text-sm max-w-64'>R. Biobedas, 341 - Vila da Saúde
                    CEP 04302-010 - São Paulo - SP</span>
                  <a href='https://maps.app.goo.gl/d2yRpF1iw8R815LL7' target='_blank' rel="noreferrer" className="text-white underline md:text-base text-sm">Google Maps...</a>
                </div>
              </div>
            </div>
            <div className="md:flex space-x-4 mt-2 hidden">
              <a href="#" className="relative w-14 h-14 border border-white rounded-full transition duration-700 group flex items-center justify-center">
                <span className="absolute inset-0 rounded-full bg-transparent transition duration-700 group-hover:bg-white"></span>
                <FaInstagram className="text-white transition-colors duration-700 group-hover:text-pink-500 text-3xl relative z-10" />
              </a>
              <a href="#" className="relative w-14 h-14 border border-white rounded-full transition duration-700 group flex items-center justify-center">
                <span className="absolute inset-0 rounded-full bg-transparent transition duration-700 group-hover:bg-white"></span>
                <TfiLinkedin className="text-white transition-colors duration-700 group-hover:text-blue-500 text-3xl relative z-10" />
              </a>
              <a href="#" className="relative w-14 h-14 border border-white rounded-full transition duration-700 group flex items-center justify-center">
                <span className="absolute inset-0 rounded-full bg-transparent transition duration-700 group-hover:bg-white"></span>
                <FaFacebook className="text-white transition-colors duration-700 group-hover:text-blue-600 text-3xl relative z-10" />
              </a>
              <a href="#" className="relative w-14 h-14 border border-white rounded-full transition duration-700 group flex items-center justify-center">
                <span className="absolute inset-0 rounded-full bg-transparent transition duration-700 group-hover:bg-white"></span>
                <FaTiktok className="text-white transition-colors duration-700 group-hover:text-black text-3xl relative z-10" />
              </a>
            </div>
          </div>
        </div>

        <div className='container mx-auto flex md:flex-row flex-col md:justify-between justify-center md:max-w-6xl md:pt-20 pt-10 text-sm text-blue-300'>
          <div className='flex md:flex-row flex-col md:gap-5 items-center justify-center'>
            <p>© 2024 :: NOVA SÃO PAULO INC</p>
            <p>Todos os direitos reservados.</p>
            <div className='flex items-center md:justify-center gap-5'>
              <a href='#' target='_blank' rel="noreferrer">Política de privacidade.</a>
              <a href='#' target='_blank' rel="noreferrer">Mapa do site</a>
            </div>
          </div>
          <div className='flex items-end justify-center gap-5'>
            <a className="ml-2" href="https://sacorp.tec.br/?utm_source=www.novasp.com.br.com.br&utm_medium=banner&utm_campaign=slogan/" target="_blank" rel="noreferrer">
              <picture>
                <img src="/logo-sacorp.svg" alt="logo Sacorp" width={100} height={100} loading="lazy" className="lg:w-16 w-14" />
              </picture>
            </a>
            <a href="https://www.gukenz.com.br/" target="_blank" rel="noreferrer">
              <picture>
                <img src="/logo-gukenz.svg" alt="logo Gukenz" width={100} height={100} className="lg:w-16 w-14" />
              </picture>
            </a>
          </div>
        </div>
      </footer>


      {/* FOOTER MOBILE */}
      <footer className="bg-blue-950 text-white py-10 px-4 md:hidden block">
        <div id='contatoMobile' className="container mx-auto flex flex-col md:flex-row md:justify-between justify-center items-center max-w-6xl w-full ">

          {/* Primeira coluna */}
          <div className="flex flex-row md:flex-col items-start md:gap-5 gap-3 w-full md:w-1/3 justify-between">
            <img src="/logo-footer.png" alt="Logo" className="md:mb-4 w-32 md:w-auto" />
            <div className='md:text-xl text-base'>
              <p className=" uppercase">O JEITO </p>
              <p className=" uppercase italic">NOVA SÃO PAULO </p>
              <p className=" uppercase">DE INCORPORAR! </p>
              <a href='#' target='_blank' rel="noreferrer" className=" text-white underline mt-3 text-sm">
                Saiba mais...
              </a>
            </div>
          </div>

          <div className='flex items-start justify-center gap-5 md:gap-0 mt-10 md:mt-0 w-full'>
            {/* Segunda coluna */}
            <div className="flex items-star">
              <ul className='flex flex-col justify-between gap-4'>
                <li className="mb-1 md:text-base"><a href="#" target='_blank' rel="noreferrer" className="">Home</a></li>
                <li className="mb-1 md:text-base"><a href="#" target='_blank' rel="noreferrer" className="">Sobre nós</a></li>
                <li className="mb-1 md:text-base"><a href="#" target='_blank' rel="noreferrer" className="">Empreendimentos</a></li>
                <li className="mb-1 md:text-base"><a href="#" target='_blank' rel="noreferrer" className=" flex items-center"><FaChevronRight className='mr-1' /> NOVA SP INC</a></li>
                <li className="mb-1 md:text-base"><a href="#" target='_blank' rel="noreferrer" className=" flex items-center"><FaChevronRight className='mr-1' /> Parceiros</a></li>
                <li className="mb-1 md:text-base"><a href="#" target='_blank' rel="noreferrer" className="">Blog</a></li>
                <li className="mb-1 md:text-base"><a href="#" target='_blank' rel="noreferrer" className="">Fale Conosco</a></li>
              </ul>
            </div>

            {/* Terceira coluna */}
            <div className="flex flex-col items-start gap-3 justify-between">
              <div className="flex md:flex-row flex-col items-center mb-2 gap-3">
              <a href='https://wa.me/+5511976312158' target='_blank' rel="noreferrer" className="flex items-center mb-2">
                <FaWhatsapp className="mr-2 text-3xl" />
                <p className='md:text-base text-sm'>11 <span className='md:text-xl'> 97631-2158 </span></p>
              </a>
              <a href='tel:11976312158' target='_blank' rel="noreferrer" className="flex items-center mb-2">
                <FaPhoneAlt className="mr-2 text-xl" />
                <p className='md:text-base text-sm'>11 <span className='md:text-xl'> 2198-4970 </span></p>
              </a>
            </div>
            <a href='mailto:contato@novaspinc.com.br' target='_blank' rel="noreferrer" className="flex items-center mb-2">
              <FaEnvelope className="mr-2 text-2xl" />
              <span className='md:text-base text-sm hidden md:flex'>email@exemplo.com</span>
              <span className='md:text-base text-sm md:hidden flex'>email</span>
            </a>
              <div className="flex items-start mb-2">
                <div className="flex mb-2">
                  <FaMapMarkerAlt className="mr-2 text-2xl" />
                  <div className='flex flex-col items-start'>
                    <span className='md:text-base text-sm max-w-64'>R. Biobedas, 341 - Vila da Saúde
                      CEP 04302-010 - São Paulo - SP</span>
                      <a href='https://maps.app.goo.gl/d2yRpF1iw8R815LL7' target='_blank' rel="noreferrer" className="text-white underline md:text-base text-sm">Google Maps...</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex space-x-4 mt-2 md:hidden items-center justify-center pt-10">
          <a
            href="#" className="relative w-12 h-12 border border-white rounded-full transition duration-700 group flex items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-transparent transition duration-700 group-hover:bg-white"></span>
            <FaInstagram className="text-white transition-colors duration-700 group-hover:text-pink-600 text-2xl relative z-10" />
          </a>
          <a
            href="#" className="relative w-12 h-12 border border-white rounded-full transition duration-700 group flex items-center justify-center" >
            <span className="absolute inset-0 rounded-full bg-transparent transition duration-700 group-hover:bg-white"></span>
            <TfiLinkedin className="text-white transition-colors duration-700 group-hover:text-blue-500 text-2xl relative z-10" />
          </a>
          <a
            href="#" className="relative w-12 h-12 border border-white rounded-full transition duration-700 group flex items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-transparent transition duration-700 group-hover:bg-white"></span>
            <FaFacebook className="text-white transition-colors duration-700 group-hover:text-blue-600 text-2xl relative z-10" />
          </a>
          <a
            href="#" className="relative w-12 h-12 border border-white rounded-full transition duration-700 group flex items-center justify-center" >
            <span className="absolute inset-0 rounded-full bg-transparent transition duration-700 group-hover:bg-white"></span>
            <FaTiktok className="text-white transition-colors duration-700 group-hover:text-black text-2xl relative z-10" />
          </a>
        </div>

        <div className='container mx-auto flex md:flex-row flex-col md:justify-between justify-center md:max-w-6xl md:pt-20 pt-10 text-sm text-blue-300'>
          <div className='flex md:flex-row flex-col md:gap-5 items-center justify-center'>
            <p className=''>© 2024 :: NOVA SÃO PAULO INC</p>
            <p className=''>Todos os direitos reservados.</p>
            <div className='flex items-center md:justify-center gap-5'>
              <a href='#' target='_blank' rel="noreferrer" className="">Política de privacidade.</a>
              <a href='#' target='_blank' rel="noreferrer" className="">Mapa do site</a>
            </div>

          </div>
          <div className='flex items-end justify-center gap-5'>
            <a
              className="ml-2"
              href="https://sacorp.tec.br/?utm_source=www.novaspinc.com.br.com.br&utm_medium=banner&utm_campaign=slogan/"
              target="_blank"
              rel="noreferrer"
            >
              <picture>
                <img
                  src="/logo-sacorp.svg"
                  alt="logo Sacorp"
                  width={100}
                  height={100}
                  loading="lazy"
                  className="lg:w-16 w-14"
                />
              </picture>
            </a>
            <a
              href="https://www.gukenz.com.br/"
              target="_blank"
              rel="noreferrer"
            >
              <picture>
                <img
                  src="/logo-gukenz.svg"
                  alt="logo Gukenz"
                  width={100}
                  height={100}
                  className="lg:w-16 w-14"
                />
              </picture>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}