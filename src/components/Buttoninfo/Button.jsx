const Button = ({ label, onClick, className, icon: Icon }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded flex items-center gap-1 ${className}`}
    >
      {Icon && <Icon />} {/* Render icon if provided */}
      {label}
    </button>
  );
};

export default Button;
