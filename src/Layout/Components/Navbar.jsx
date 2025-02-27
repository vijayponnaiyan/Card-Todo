import { React } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/bird.jpg";
import logo2 from "../../images/bird_two.png";
import CustomButton from "../../components/Buttoninfo/CustomButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full z-20 top-0 start-0 border-gray-200 dark:border-gray-600 p-0 transition-all duration-300 ${
          isHovered || isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
          <Link
            to="/"
            className="flex items-center space-x-3 sm:pl-4 md:pl-8 lg:pl-14"
          >
            <img
              src={isHovered || isScrolled ? logo : logo2}
              className="h-12 sm:h-14 md:h-16 lg:h-20 xl:h-24 transition-all duration-300"
              alt="Logo"
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/Card"
              className="text-rose-600 font-bold hover:text-red-700 transition duration-200"
            >
              Card
            </Link>
            <Link
              to="/Home"
              className="text-rose-600 font-bold hover:text-red-700 transition duration-200"
            >
              Todo
            </Link>
          </div>

          <div className="flex items-center space-x-3 sm:pr-4 md:pr-8 lg:pr-14">
            <CustomButton
              text="14 DAY FREE TRIAL"
              onClick={() => alert("Free trial button clicked!")}
              className="hidden md:block bg-rose-600 text-white px-4 py-2 rounded hover:bg-rose-700 transition-all"
            />

            <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg border-l border-gray-200 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-30`}
      >
        <div className="p-6">
          <button
            className="text-gray-500 hover:text-gray-900 focus:outline-none rounded-full p-2"
            onClick={() => setIsOpen(false)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="mt-4 space-y-4">
            <Link
              to="/Card"
              className="block text-rose-600 font-bold hover:text-red-700 transition duration-200"
            >
              Card
            </Link>
            <Link
              to="/Home"
              className="block text-rose-600 font-bold hover:text-red-700 transition duration-200"
            >
              Todo
            </Link>
            <button
              type="button"
              className="block w-full bg-rose-600 hover:bg-red-700 text-white py-3 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              14 DAY FREE TRIAL
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
