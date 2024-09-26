import { useState } from 'react';
import { FaBars, FaTimes, FaChevronDown, FaPhoneAlt, FaWhatsapp, FaChevronRight } from 'react-icons/fa';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMenuClick = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="md:bg-transparent p-4">
      <div className="container mx-auto flex justify-between items-center w-full md:max-w-6xl">
        {/* Logo */}
        <div className="flex items-center">
          <picture>
            <img src="/logo.png" alt="Logo" className="h-12 md:h-auto" /> {/* Diminuí a altura da imagem para mobile */}
          </picture>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="/" className="text-white flex items-center" onClick={handleMenuClick}>Home</a>
          <a href="#about" className="flex items-center text-white border-l-2 pl-4" onClick={handleMenuClick}>Sobre nós</a>
          <div className="relative">
            <button className="text-white flex items-center border-l-2 pl-4" onClick={toggleDropdown}>
              Empreendimentos
              <FaChevronDown className='ml-1' />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg z-20">
                <a href="#empreendimentos" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={handleMenuClick}>NOVA SP INC</a>
                <a href="#parceiros" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={handleMenuClick}>Parceiros</a>
              </div>
            )}
          </div>
          <a href="#servicos" className="text-white flex items-center border-l-2 pl-4" onClick={handleMenuClick}>Serviços</a>
          <a href="#blog" className="text-white flex items-center border-l-2 pl-4" onClick={handleMenuClick}>Blog</a>
          <a href="#contato" className="text-white flex items-center border-l-2 pl-4" onClick={handleMenuClick}>Fale Conosco</a>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white flex items-center">
          {isOpen ? (
            <>
              <span className="mr-2">Menu</span>
              <FaTimes size={24} />
            </>
          ) : (
            <>
              <span className="mr-2">Menu</span>
              <FaBars size={24} />
            </>
          )}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden w-full bg-blue-950 p-6 gap-5 flex flex-col fixed top-0 left-0 z-30">
          <button onClick={() => setIsOpen(false)} className="text-white flex items-center justify-center absolute top-10 right-6"> <span className="mr-2 text-base">Menu</span>
            <FaTimes size={24} />
          </button>
          <a href="#" className="block pt-20 text-white text-lg px-4 py-2" onClick={handleMenuClick}>Home</a>
          <a href="#about" className="block text-white text-lg px-4 py-2" onClick={handleMenuClick}>Sobre</a>
          <div>
            <button className="block text-white text-lg px-4 py-2 w-full text-left" onClick={toggleDropdown}>
              Empreendimentos
            </button>
            {isDropdownOpen && (
              <div className="">
                <a href="#empreendimentos" className="text-white px-4 py-2 flex" onClick={handleMenuClick}>
                  <FaChevronRight className='mr-2' />
                  NOVA SP INC
                </a>
                <a href="#parceiros" className="text-white px-4 py-2 flex" onClick={handleMenuClick}>
                  <FaChevronRight className='mr-2' />
                  Parceiros
                </a>
              </div>
            )}
          </div>
          <a href="#servicos" className="block text-white text-lg px-4 py-2" onClick={handleMenuClick}>Serviços</a>
          <a href="#blog" className="block text-white text-lg px-4 py-2" onClick={handleMenuClick}>Blog</a>
          <a href="#contatoMobile" className="block text-white text-lg px-4 py-2" onClick={handleMenuClick}>Fale Conosco</a>
          <a href='https://wa.me/+5511976312158' target='_blank' rel="noreferrer" className="text-white px-4 py-2 flex pt-10" onClick={handleMenuClick}>
            <FaWhatsapp className="mr-2 text-3xl" />
            <p className='text-2xl'>11 <span className=''> 97631-2158 </span></p>
          </a>
          <a href='tel:11976312158' target='_blank' rel="noreferrer" className="text-white px-4 py-2 flex pt-5" onClick={handleMenuClick}>
            <FaPhoneAlt className="mr-2 text-2xl" />
            <p className='text-2xl'>11 <span className=''> 2198-4970 </span></p>
          </a>
        </div>
      )}
    </nav>
  );
};
