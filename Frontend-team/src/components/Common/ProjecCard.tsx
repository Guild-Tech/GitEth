import { Button } from "../ui/button";
import skillIcon from "../../assets/icons/skill.svg";
import { ArrowRightIcon } from "lucide-react";
import frame1 from "../../assets/icons/Frame.svg";
import icon2 from "../../assets/icons/icon2.svg";
import icon3 from "../../assets/icons/icon3.svg";
import CustomBtn from "./CustomBtn";
import frame from "../../assets/images/Frame (7).png";
import Frame2 from "../../assets/icons/Frame (2).svg";
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
        className={` p-8 border border-border backdrop-blur-md w-full h-[408px]  bg-white bg-opacity-5 rounded-3xl `}
      >
        <div></div>
        <div className="flex items-center justify-between">
          <img src={project?.logo} alt="" className="h-20 w-20 mb-5" />
          {expand ? (
            <img
              src={Frame2}
              alt=""
              className="w-6 h-6 mb-16"
              onClick={() => setExpand(!expand)}
            />
          ) : (
            <img
              src={frame}
              alt=""
              className="w-6 h-6 mb-16"
              onClick={() => setExpand(!expand)}
            />
          )}
        </div>
        <h3 className="text-2xl font-bold text-white mb-5">{project?.title}</h3>
        <p className="text-[#B3B8DB] text-base mb-5">{project?.description.slice(0, 200)}</p>

        <div className="flex gap-2 text-sm items-center mb-5 flex-wrap">
          <img src={skillIcon} alt="" className="w-4 h-4" />
          <div className="flex gap-2 items-center ">
            {project?.skills?.map((item: string, id: number) => (
              <span className="text-sm" key={id}>
                {`${item}${id + 1 < project?.skills.length ? "," : ""}`}
              </span>
            ))}
            <img src={frame1} alt="" className="w-4 h-4 gap-2 " />
            <p className="text-[#B3B8DB]   font-sans text-base font-normal">
              Contributors
            </p>
            <img src={icon2} alt="" className="w-4 h-4 mt-1 gap-2" />
            <img src={icon3} alt="" className="w-4 h-4 mt-1" />
          </div>
          <div className="border-border border backdrop-blur-sm py-2 px-4 rounded-3xl">
            <p className="overflow-hidden">{project?.difficulty}</p>
          </div>
        </div>
        {expand ? (
          <div className="mb-48">
            <hr className="bg-gray-400" />
            <div className="flex items-center justify-start p-2 gap-3">
              <div className="w-[154px] h-[33px gap-2 rounded-[1000px] bg-[#0D0F1C] border border-[#363F72] flex p-1 items-center">
                <img src={circle} alt="" className="w-4 h-4 mt-1 " />
                <p className="text-white text-sm">Eth Open Source</p>
              </div>
              {project.tags?.map((item: string, id: number) => (  
              <div key={id} className="border-border border backdrop-blur-sm py-2 px-4 rounded-3xl mb-4 mt-2">
                <p className="overflow-hidden">{item}</p>
              </div>
              ))}

              <img src={usdt} alt="" className="w-8 h-8 mb-2" />
              <p className="mb-2">{`${project?.reward > 999? (project?.reward / 1000) + "k+ USDT" : project?.reward  + "USDT"}`}</p>
            </div>
          </div>
        ) : (
          <div className="flex justify-end">
            <CustomBtn
              text="View Project"
              colored="yes"
              onClick={() => {
                navigate("/Sidebar");
              }}
            />
          </div>
        )}
      </div>

      {/* Mobile Project Card */}
      <div className="sm:hidden ">
        <div className="border border-border rounded-3xl p-3">
          {/* <img src={project.icon} alt="" className=" mb-5 mx-auto w-10" /> */}
          <h3 className="max-sm:text-xs text-2xl font-bold text-white mb-5 max-sm:mb-2">
            {/* {project.title} */}
          </h3>
          <p className="text-[#B3B8DB] max-sm:text-[10px] max-sm:leading-4 text-base mb-5 max-sm:mb-1">
            {/* {project.description} */}
          </p>
          <div className="flex justify-end">
            <Button className=" bg-transparent text-white justify-self-end text-base w-fit">
              <ArrowRightIcon />
            </Button>
          </div>
        </div>

        <div className="text-[10px] gap-[11] text-white mt-3">
          <div className="flex justify-center items-center mb-3">
            <img src={skillIcon} alt="" className="w-4 h-4 mr-2" />

            <div className="flex gap-1 ">
              {/* {project.technology.map((item: string, id: number) => (
                <span className="" key={id}>{`${item}${
                  id + 1 < project.technology.length ? "," : ""
                }`}</span>
              ))} */}
            </div>
          </div>
          <div className="border-border border backdrop-blur-sm py-2 px-4 rounded-3xl w-fit mx-auto">
            {/* <p className="overflow-hidden text-center">{project.difficulty}</p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjecCard;
