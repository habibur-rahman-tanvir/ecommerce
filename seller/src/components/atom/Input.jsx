import { twMerge } from "tailwind-merge";

const Input = ({
  type = "text",
  className,
  name,
  value,
  onChange,
  placeholder,
  required = false,
}) => {
  return (
    <input
      className={twMerge(
        "bg-[#e5e5e5] block p-1 rounded focus:outline-1 outline-[#c989ef]",
        className
      )}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      value={value}
      name={name}
      required={required}
    />
  );
};

export default Input;
