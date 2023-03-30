import React, { useState } from "react";
import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";

interface NavbarProps {
  title: string;
}

const Navbar: React.FC<NavbarProps> = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-slate-500 sticky top-0 left-0 right-0">
      <div 
      className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"
      >
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <AiOutlineCloseCircle
                  className="block h-6 w-6"
                  aria-hidden="true"
                />
              ) : (
                <BiMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <div
           className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
           >
            <div className="flex-shrink-0">
              <span className="text-white font-semibold text-xl">{title}</span>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                
                <Link href='/' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Services
                </Link>
                <Link href='/project' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Project
                </Link>
                <Link href='/nft' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  NFT
                </Link>
                <Link href="/faq" className="text-gray-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  FAQ
                </Link>
                <Link href='/pratfrom' className="text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-extrabold ">
                  Pratform
                </Link>
                <Link href='/comingSoon' className="text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-extrabold">
                  Coming Soon
                </Link>
              </div>
            </div>
          </div>
          <div>
            <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white"  src="https://www.w3schools.com/howto/img_avatar.png" />
          </div>
        </div>
      </div>
      <div className={isOpen ? "block sm:hidden" : "hidden"} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href='/genesisPass' className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Genesis Pass
          </Link>
          <Link href='/' className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Services
          </Link>
          <Link href='/project' className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Project
          </Link>
          <Link href='/nft' className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            NFT
          </Link>
          <Link href='/faq' className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            FQA
          </Link>
          <a href='/pratfrom'className="text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-extrabold ">
            Pratform
          </a>
          <Link href='/comingSoon' className="text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-extrabold">
            Coming Soon
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
