"use client";
import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="">
      <div className="burgerMenu" onClick={toggleMenu}>
        <button className="relative group" onClick={toggleMenu}>
          <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all  ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
            <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden group-focus:-translate-y-1.5 group-focus:-rotate-90">
              <div className="bg-dark-green h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:rotate-[42deg] group-focus:w-2/3 delay-150"></div>
              <div className="bg-dark-green h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10"></div>
              <div className="bg-dark-green h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg] group-focus:w-2/3 delay-150"></div>
            </div>
          </div>
        </button>
      </div>
      <Transition
        show={isOpen}
        enter="transition duration-300 ease-out"
        enterFrom="transform translate-x-full"
        enterTo="transform translate-x-0"
        leave="transition duration-300 ease-out"
        leaveFrom="transform translate-x-0"
        leaveTo="transform translate-x-full"
        className="fixed inset-0 bg-black-spec z-50"
      >
        <div className="flex justify-end pr-8 pt-3 bg-var-black">
          <button className="text-white" onClick={toggleMenu}>
            <FiX size={52} />
          </button>
        </div>
        <div className=" bg-dark-green flex flex-col items-center justify-center absolute right-0 mx-8 md:w-1/3 rounded-md">
          <Link
            href="#presentation"
            className="text-white m-6"
            onClick={closeMenu}
          >
            PRÉSENTATION
          </Link>
          <Link href="#concept" className="text-white m-6" onClick={closeMenu}>
            CONCEPT
          </Link>
          <Link
            href="#formulaire"
            className="text-white m-6"
            onClick={closeMenu}
          >
            FORMULAIRE
          </Link>
        </div>
      </Transition>

      {/* Style */}
      <style jsx>{`
        .burgerMenu {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-end;
          width: 33px;
          height: 35px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default BurgerMenu;
