import skillIcon from "../../assets/icons/skill.svg";

import fram1 from "../../assets/images/Frame (7).png";
import fram2 from "../../assets/images/Frame (8).png";
import frams from "../../assets/images/Frame (21).png";
import icon2 from "../../assets/icons/icon2.svg";
import icon3 from "../../assets/icons/icon3.svg";
import CustomBtn from "./CustomBtn";

import usdt from "../../assets/images/usdt.png";
import circle from "../../assets/icons/ciclle.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import {IProjectItem} from "./types"
const ProjecCard = ({ project }: any) => {
  const [expand, setExpand] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div
        className={` p-6 max-sm:p-6 border border-border   backdrop-blur-md  h-fit  bg-white bg-opacity-5 rounded-3xl w-full container `}
      >
        <div className="flex items-center justify-between  max-sm:mb-5 max-sm:flex     max-sm:mx-2   ">
          <img
            src={project?.logo}
            alt=""
            className="h-20 w-20 mb-5 max-sm:w-16 max-sm:h-16"
          />

          <img
            src={expand ? fram2 : fram1}
            alt=""
            onClick={() => setExpand(!expand)}
            className=" cursor-pointer"
          />
        </div>

        <h3 className="text-2xl text-[24px] text-white mb-5 max-sm:font-medium ">
          {project?.title}
        </h3>
        <p className="text-[#B3B8DB] text-base mb-5  max-w-[400px] sm:max-w-none">
          {project?.description.slice(0, 200)}
        </p>

        <div className="flex gap-2 text-sm items-center max-sm:block  max-sm:space-y-2">
          <div className="flex gap-2  items-center ">
            <img src={skillIcon} alt="" className="w-4 h-4 " />
            {project?.skills?.map((item: string, id: number) => (
              <span className="text-sm" key={id}>
                {`${item}${id + 1 < project?.skills.length ? "," : ""}`}
              </span>
            ))}{" "}
          </div>
          <div className="flex items-center  max-sm:flex gap-2 ">
            <img src={frams} alt="" className="w-[16px] h-[16px] mt-1" />
            <p className="text-[#B3B8DB]    font-sans  font-normal">
              {project?.para}
            </p>
            <img src={icon2} alt="" className="w-4 h-4 mt-1 gap-2" />
            <img src={icon3} alt="" className="w-4 h-4 mt-1" />
          </div>

          <div className="border-border border  py-2 px-4 rounded-3xl w-fit flex items-center cursor-pointer  bg-white bg-opacity-5">
            <p className="overflow-hidden">{project?.difficulty}</p>
          </div>
        </div>
        {expand && (
          <div>
            <hr className="bg-gray-400 mt-4" />
            <div className="flex  max-sm:block  items-center justify-between p-2 gap-2  space-y-2">
              <div className="flex items-center max-sm:flex-wrap gap-2  max-sm:gap-2">
                <span className="flex  items-center gap-1 rounded-[16px] border p-2 bg-black border-[#363F72] w-fit h-[33px] justify-center cursor-pointer mb-2">
                  <img src={circle} alt="" className="w-4 h-4  " />
                  <p className="text-white ">Eth Open Source</p>
                </span>

                {/* <span className="border-border border w-fit h-[33px] py-2 px-4 rounded-3xl bg-white bg-opacity-5 mb-4 mt-2 flex items-center cursor-pointer">
                  <p className="overflow-hidden">{project?.letter}</p>
                </span> */}
                {project.tags?.map((item: string, id: number) => (  
                <span  key={id} className="border-border border w-fit h-[33px] py-2 px-4 rounded-3xl bg-white bg-opacity-5 mb-4 mt-2 flex items-center cursor-pointer">
                <p className="overflow-hidden">{item}</p>
                </span>
              ))}

                <span className="flex gap-2 items-center">
                  <img src={usdt} alt="" className="w-8 h-8 mb-2" />
                  <p className="mb-2">{`${project?.reward > 999? (project?.reward / 1000) + "k+ USDT" : project?.reward  + "USDT"}`}</p>
                </span>
              </div>

              <div className="">
                <CustomBtn
                  text="View Project"
                  colored="yes"
                  onClick={() => {
                    navigate("/Sidebar");
                  }}
                />{" "}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Project Card */}
    </>
  );
};

export default ProjecCard;
