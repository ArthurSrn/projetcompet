import { useState } from "react";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        id="menu-toggle"
        className="fixed top-0 left-0 p-4 cursor-pointer z-50 focus:outline-none"
        onClick={toggleMenu}
      >
        <span className="block w-6 h-1 bg-gray-800 mb-1"></span>
        <span className="block w-6 h-1 bg-gray-800 mb-1"></span>
        <span className="block w-6 h-1 bg-gray-800"></span>
      </button>

      {isOpen && (
        <div className="fixed top-0 left-0 w-64 h-screen bg-white shadow-lg transform translate-x-0 ease-in-out transition-transform duration-300 z-40">
          <ul className="py-4 px-6">
            <li className="mb-4">
              <a href="#home" className="text-gray-800 hover:text-gray-600">
                Accueil
              </a>
            </li>
            <li className="mb-4">
              <a href="#about" className="text-gray-800 hover:text-gray-600">
                À propos
              </a>
            </li>
            <li className="mb-4">
              <a href="#services" className="text-gray-800 hover:text-gray-600">
                Services
              </a>
            </li>
            <li className="mb-4">
              <a href="#contact" className="text-gray-800 hover:text-gray-600">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
