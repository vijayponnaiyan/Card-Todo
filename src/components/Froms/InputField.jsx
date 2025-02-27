const InputField = ({
  label,
  name,
  register,
  errors,
  placeholder,
  validation,
}) => {
  return (
    <div className="w-full md:w-auto flex-1">
      <label className="block text-white font-semibold mb-1">{label}</label>
      <input
        type="text"
        className="border border-gray-300 p-2 rounded-md outline-none w-full"
        {...register(name, validation)}
        placeholder={placeholder}
      />
      {errors[name] && (
        <p className="text-red-500 text-sm font-bold">{errors[name].message}</p>
      )}
    </div>
  );
};

export default InputField;
