import { useState } from "react";
import Carditem from "./Carditem";
import Carditems1 from "./Carditems1";

const Card = () => {
  const [slide, setSlide] = useState(false);
  return (
    <div className="mt-44">
      <div className="flex w-[296px] h-[51px] rounded-[24px] border border-customBorder items-center justify-center gap-6 ">
        <button
          className=" w-[128px] h-[35px] rounded-[24px] hover:bg-[#363F72] "
          onClick={() => setSlide(true)}
        >
          Project Overview
        </button>
        <button
          className="w-[128px] h-[35px] rounded-[24px] hover:bg-[#363F72]"
          onClick={() => setSlide(false)}
        >
          Collaborators
        </button>
      </div>
      {slide ? <Carditem /> : <Carditems1 />}
    </div>
  );
};

export default Card;
