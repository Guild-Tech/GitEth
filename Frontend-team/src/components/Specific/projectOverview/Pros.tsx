import frame from "../../../assets/images/Frame (10).png";
import usdt from "../../../assets/images/usdt.png";
import elish from "../../../assets/images/Ellipse 5 (3).png";
import elis2 from "../../../assets/images/Ellipse 6.png";
import frames from "../../../assets/images/Frame (12).png";
import { useState } from "react";
import Carditem from "./Carditem";
import Carditems1 from "./Carditems1";

const Pros = () => {
  const [slide, setSlide] = useState(true);
  const [isActive, setisActive] = useState(true);
  return (
    <div className="  mt-28   max-sm:mt-12  relative z-10 max-sm:w-full">
      <div className="flex  gap-1 max-sm:m-0  max-sm:p-4 max-sm:mr-4  ">
        <img src={frame} alt="" className="w-4 h-4 mt-1 cursor-pointer" />
        <p>Back</p>
      </div>
      <div className="  w-full ">
        <div className="flex w-[321px] h-[51px] rounded-[26px] border border-customBorder items-center justify-center gap-6 sm:hidden max-sm:mb-6 max-sm:mt-12 ">
          <button
            className={` w-[152px] h-[35px] rounded-[24px]  ${
              !isActive ? "" : "bg-slate-900 border border-bg-slate-900"
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
              !isActive ? "bg-slate-900 border border-bg-slate-900" : ""
            }`}
            onClick={() => {
              setSlide(false);
              setisActive(false);
            }}
          >
            Collaborators
          </button>
        </div>
      </div>
      <div className="  ">
        <div className="border border-custmBlue rounded-[16px] w-[413px] h-[820px] bg-white bg-opacity-5  mt-8 max-sm:ml-0 max-sm:mt-0  max-sm:w-full max-sm:h-fit p-4 max-sm:p-4 max-sm:space-y-2">
          <div className="flex items-center gap-4 mt-5 ">
            <img src={frames} alt="" className="ml-2" />
            <h3 className="max-sm:text-[24px]">Project Overview</h3>
          </div>
          <div className="">
            <p className=" text-[16px] p-3 text-[#B3B8DB]  ">
              Get better understanding of what the project entails and if you
              fit in.
            </p>
          </div>
          <hr className="border-b border-border " />
          <div className="p-3 mt-4 max-sm:p-0">
            <h3 className="">Funding Status</h3>
            <div className=" flex gap-3 mt-3 ">
              <img src={usdt} alt="" className="w-8 h-8" /> <p>12k+ USDT</p>
            </div>
          </div>
          <div className="  p-3 max-sm:p-0">
            <h2 className=" text-white text-base font-semibold">Skill Level</h2>
            <div>
              <button className=" mt-4 text-sm  text-white  rounded-[8px] border border-[#363F72] hover:opacity-80 bg-white bg-opacity-5  p-[8px_16px]">
                Intermediate
              </button>
            </div>
          </div>
          <div className="flex flex-col space-y-3 p-4  max-sm:p-0 ">
            <h3 className="text-white text-base font-semibold ">Skills</h3>

            <div className="flex flex-wrap max-sm:flex-wrap gap-2 max-sm:gap-4 max-sm:w-full">
              <button className="text-sm w-fit text-white   rounded-[8px] border border-[#363F72] hover:opacity-80 bg-white bg-opacity-5  p-[8px_16px]">
                React
              </button>
              <button className="text-sm w-fit  text-white  rounded-[8px] border border-[#363F72] hover:opacity-80 bg-white bg-opacity-5  p-[8px_16px]">
                Security
              </button>
              <button className="text-sm w-fit  text-white  rounded-[8px] border border-[#363F72] hover:opacity-80 bg-white bg-opacity-5  p-[8px_16px]">
                Community
              </button>
              <button className="text-sm w-fit text-white  rounded-[8px] border border-[#363F72] hover:opacity-80 bg-white bg-opacity-5  p-[8px_16px]">
                UX Design
              </button>
              <button className="text-sm w-fit text-white  rounded-[8px] border border-[#363F72] hover:opacity-80 bg-white bg-opacity-5  p-[8px_16px]">
                Solidity
              </button>
              <button className="text-sm w-fit text-white  rounded-[8px] border border-[#363F72] hover:opacity-80 bg-white bg-opacity-5  p-[8px_16px]">
                Marketing
              </button>
            </div>
          </div>
          <div className="flex justify-between mt-4 max-sm:mt-0">
            <h1 className="ml-6 max-sm:ml-0">Contributors</h1>

            <p className="mr-6 text-customBlue">View all</p>
          </div>
          <div className="flex -space-x-4 ml-5 max-sm:ml-0 mt-3">
            <img src={elish} alt="" className="w-[32px] h-[32px] " />
            <img src={elis2} alt="" className="w-[32px] h-[32px]" />
            <img src={elish} alt="" className="w-[32px] h-[32px]" />
            <img src={elis2} alt="" className="w-[32px] h-[32px]" />
            <div className="flex items-center justify-center">
              <p className="mt-2 ml-6">17 Contributors</p>
            </div>
          </div>

          <div className="  ml-4 max-sm:ml-0 ">
            <h2 className="mt-4  p-2">Tasks Overview</h2>
            <div className="flex flex-wrap gap-4  max-sm:gap-1  max-sm:grid max-sm:grid-cols-1 max-sm:space-y-2 ">
              <button className="text-sm  text-white w-[170.5px] h-[70px]  rounded-[8px] border border-[#363F72] hover:opacity-80 bg-white bg-opacity-5 max-sm:w-full flex flex-col p-3 space-y-2 ">
                <p className="font-kern text-[24px]">24</p>
                <p className=" ">New Issues</p>
              </button>
              <button className="text-sm  text-white w-[170.5px] h-[70px] rounded-[8px] border border-[#363F72] hover:opacity-80 bg-white bg-opacity-5 max-sm:w-full flex flex-col p-3 space-y-2 ">
                <p className="font-kern text-[24px]">24</p>
                <p className=" ">In-progress</p>
              </button>

              <button className="text-sm  text-white w-[170.5px] h-[70px] rounded-[8px] border border-[#363F72] hover:opacity-80 bg-white bg-opacity-5 max-sm:w-full flex flex-col p-3 space-y-2 ">
                <p className="font-kern text-[24px]">24</p>
                <p className=" ">Urgent</p>
              </button>
            </div>
          </div>
        </div>
        <div className=" sm:hidden">
          {slide ? <Carditem /> : <Carditems1 />}
        </div>
      </div>
    </div>
  );
};

export default Pros;
