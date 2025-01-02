import { useState } from "react";

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div
      className={`w-5 h-5 flex items-center justify-center rounded-md border-2 ${
        isChecked
          ? "bg-gradient-to-r from-[#E8D07A] to-[#5312D6]"
          : "bg-black border-gray-700"
      } transition-all cursor-pointer`}
      onClick={handleChange}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className="accent-purple-600 w-full h-full rounded-md cursor-pointer"
      />
      {isChecked && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-white pointer-events-none"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      )}
    </div>
  );
};

export default Checkbox;
