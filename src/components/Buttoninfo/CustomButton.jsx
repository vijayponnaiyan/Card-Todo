import React from 'react';

const CustomButton = ({ text, onClick, className }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`focus:outline-none text-white sm:w-52 md:w-64 lg:w-52 bg-rose-600 hover:bg-rose-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base px-6 py-3 me-2 mb-2 transition-all duration-200 transform hover:scale-105 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 shadow-lg ${className}`}
    >
      {text}
    </button>

  );
};

export default CustomButton;
