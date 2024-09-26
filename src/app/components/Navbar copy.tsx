'use client'; 
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaChevronDown, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

export const Navbar2: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEmpreendimentosOpen, setIsEmpreendimentosOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleEmpreendimentos = () => {
    setIsEmpreendimentosOpen((prev) => !prev);
  };

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsEmpreendimentosOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-transparent p-4 relative">
      <div className="container mx-auto flex justify-between items-center w-full md:max-w-6xl">
        {/* Logo */}
        <div className="flex items-center">
          <picture>
            <img src="/logo.png" alt="Logo" />
          </picture>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/" passHref>
            <p className="text-white">Home</p>
          </Link>
          <Link href="#about" passHref>
            <p className="text-white border-l-2 pl-4">Sobre nós</p>
          </Link>
          <div className="relative" ref={dropdownRef}>
            <p
              onClick={toggleEmpreendimentos}
              className="text-white border-l-2 pl-4 cursor-pointer flex items-center"
            >
              c <FaChevronDown className={`ml-1 transition-transform ${isEmpreendimentosOpen ? 'rotate-180' : ''}`} />
            </p>
            {isEmpreendimentosOpen && (
              <ul className="absolute left-0 mt-3 bg-white rounded shadow-lg w-full">
                <li>
                <Link href="#empreendimentosq" passHref>
                      <p className="text-white font-medium" onClick={() => setIsEmpreendimentosOpen(false)}>NOVA SP INC</p>
                    </Link>


                </li>
                <li>
                  <Link href="#parceiros" passHref>
                    <p className="text-black px-4 py-3" onClick={() => setIsEmpreendimentosOpen(false)}>Parceiros</p>
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <Link href="#servicos" passHref>
            <p className="text-white border-l-2 pl-4">Serviços</p>
          </Link>
          <Link href="#blog" passHref>
            <p className="text-white border-l-2 pl-4">Blog</p>
          </Link>
          <Link href="#contato" passHref>
            <p className="text-white border-l-2 pl-4">Fale Conosco</p>
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <div className={`md:hidden ${isOpen ? 'absolute' : 'hidden'} top-0 left-0 w-full bg-blue-950 p-6`}>
        <div className="flex justify-end items-center mb-4">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <FaTimes size={24} />
          </button>
        </div>
        <ul className="flex flex-col space-y-8 py-10">
          <li>
            <Link href="/" passHref>
              <p className="text-white text-lg font-medium">Home</p>
            </Link>
          </li>
          <li>
            <Link href="#about" passHref>
              <p className="text-white text-lg font-medium">Sobre nós</p>
            </Link>
          </li>
          <li>
            <div ref={dropdownRef}>
              <p
                onClick={toggleEmpreendimentos}
                className="text-white text-lg cursor-pointer flex items-center"
              >
                Empreendimentos <FaChevronDown className={`ml-1 transition-transform ${isEmpreendimentosOpen ? 'rotate-180' : ''}`} />
              </p>
              {isEmpreendimentosOpen && (
                <ul className="pl-6 flex flex-col gap-3 pt-5">
                  <li>
                    <Link href="#empreendimentos" passHref>
                      <p className="text-white font-medium" onClick={() => setIsEmpreendimentosOpen(false)}>NOVA SP INC</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="#parceiros" passHref>
                      <p className="text-white font-medium" onClick={() => setIsEmpreendimentosOpen(false)}>Parceiros</p>
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </li>
          <li>
            <Link href="#servicos" passHref>
              <p className="text-white text-lg font-medium">Serviços</p>
            </Link>
          </li>
          <li>
            <Link href="#blog" passHref>
              <p className="text-white text-lg font-medium">Blog</p>
            </Link>
          </li>
          <li>
            <Link href="#contato" passHref>
              <p className="text-white text-lg font-medium">Fale Conosco</p>
            </Link>
          </li>
          <li>
            <a href='https://wa.me/+5511976312158' target='_blank' rel="noreferrer" className="flex items-center mb-2 text-white">
              <FaWhatsapp className="mr-2 text-3xl" />
              <p className='text-lg'>11 <span className='md:text-xl'> 97631-2158 </span></p>
            </a>
          </li>
          <li>
            <a href='tel:11976312158' target='_blank' rel="noreferrer" className="flex items-center mb-2 text-white">
              <FaPhoneAlt className="mr-2 text-3xl" />
              <p className='text-lg'>11 <span className='md:text-xl'> 2198-4970 </span></p>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
