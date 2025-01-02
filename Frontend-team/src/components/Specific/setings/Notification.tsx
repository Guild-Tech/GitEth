import { useState } from "react";
import Task from "./Task";

const Notification = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };
  return (
    <div>
      <div className="bg-white bg-opacity-5 w-full p-5 gap-4 space-y-2 rounded-[24px] container mx-auto">
        <div className="items-center justify-between flex">
          <p>Notification Preferences</p>
          <p className="text-[14px] mr-2">Enable all</p>
        </div>
        <div className="items-center justify-between flex">
          <p className="text-[16px] text-[#B3B8DB]">
            Customise your notification settings to stay informed about
            important updates.
          </p>
          <div className="mr-5">
            <div
              className={`w-12 h-8 flex items-center border border-[#363F72] rounded-full  cursor-pointer ${
                isOn
                  ? "bg-gradient-to-r from-[#E8D07A] to-[#5312D6]"
                  : "bg-black"
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
        <Task />
      </div>
    </div>
  );
};

export default Notification;
