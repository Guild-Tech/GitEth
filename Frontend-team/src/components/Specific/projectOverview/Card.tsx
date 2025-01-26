import { useState } from "react";
import Carditem from "./Carditem";
import Carditems1 from "./Carditems1";

const Card = () => {
  const [slide, setSlide] = useState(true);
  const [isActive, setisActive] = useState(true);
  return (
    <div className="mt-44  w-full">
      <div className="flex w-[321px] h-[51px] rounded-[24px] bg-white bg-opacity-5 border border-customBorder items-center justify-center gap-6 max-sm:hidden">
        <button
          className={` w-[152px]  h-[35px] rounded-[24px]  ${
            !isActive ? "" : "bg-white bg-opacity-5 border border-bg-slate-900"
          }`}
          onClick={() => {
            setSlide(true);
            setisActive(true);
          }}
        >
          Project Overview
        </button>
        <button
          className={` w-[128px] h-[35px] rounded-[24px]   ${
            !isActive ? "bg-white bg-opacity-5 border border-bg-slate-900" : ""
          }`}
          onClick={() => {
            setSlide(false);
            setisActive(false);
          }}
        >
          Collaborators
        </button>
      </div>
      <div className="max-sm:hidden">
        {slide ? <Carditem /> : <Carditems1 />}
      </div>
    </div>
  );
};

export default Card;
