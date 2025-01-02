import { useState } from "react";

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };
  return (
    <div>
      <div className="">
        <div
          className={`w-12 h-8 flex items-center border border-[#363F72] rounded-full  cursor-pointer ${
            isOn ? "bg-gradient-to-r from-[#E8D07A] to-[#5312D6]" : "bg-black"
          }`}
          onClick={handleToggle}
        >
          <div
            className={`bg-white w-5 h-5 left-1  rounded-full shadow-md transform ${
              isOn ? "translate-x-6" : "translate-x-1"
            } transition-transform`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Toggle;
