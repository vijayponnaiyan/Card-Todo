const Card = ({ children }) => {
  return (
    <div className="bg-white p-1 w-99 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg duration-300">
      {children}
    </div>
  );
};

export default Card;
