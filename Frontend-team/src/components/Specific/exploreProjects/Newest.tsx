import ProjecCard from "@/components/Common/ProjecCard";
import vector from "../../../assets/icons/Vector (1).png";
import fram2 from "../../../assets/images/Frame (7).png";

import data from "../../../utils/dummyData.json";
import Filtermobile from "./Filtermobile";
import { useState } from "react";
import CustomBtn from "@/components/Common/CustomBtn";

const Newest = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }; // Toggle modal visibility
  // const project = data.find((item: Project) => item.id === id);

  if (!data) {
    return <p>Project not found!</p>;
  }
  // console.log("Found project:", project);
  return (
    <div className="w-full container max-sm:space-y-6 ">
      {/* <div
        className="flex items-center rounded-[20px] border w-[90px] h-[43]  mt-12 cursor-pointer p-2   text-black sm:hidden"
        onClick={() => setOpenSide(false)}
      >
        <p className="text-black">Filters</p>
        <img src={fram2} alt="" className=" " />
      </div> */}
      <div className="ml-4  flex gap-4 items-center ">
        <button
          className="flex items-center gap-2 bg-gray-100 text-black rounded-full px-4 py-2 shadow-sm hover:bg-gray-200 sm:hidden mt-11 w-[88px] h-[46px]"
          onClick={toggleModal}
        >
          <span className="text-sm font-medium">Filter</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        <div className="flex items-center justify-between  mt-12 p-2 w-full max-sm:mt-12">
          <select className="bg-gray-100 text-black  rounded-[20px] max-sm:w-[83px] max-sm:h-[43px]  ">
            <option className="max-sm:w-[10px] sm:text-xs max-sm:rounded-[20px]">
              Sort by - Newest
            </option>
            <option className="max-sm:w-[10px]">Sort by - Oldest</option>
          </select>
          <p
            className=" text-[#717BBC] max-sm:hidden
"
          >
            1000+ Projects
          </p>
          <p
            className=" text-transparent bg-clip-text bg-gradient-to-r from-[#E8D07A] to-[#5312D6] sm:hidden 
"
          >
            1000+ Projects
          </p>
        </div>
      </div>
      <Filtermobile isOpen={isModalOpen} onClose={toggleModal} />

      <div className="grid   p-4 max-sm:p-0 max-sm:grid-cols-1 max-sm:mx-auto mx-auto ">
        <div className="space-y-4 items-center justify-between  max-sm:mb-5     max-sm:mx-2  ">
          {data.map((project, index) => (
            <ProjecCard project={project} key={index} />
          ))}
          {data.map((project, index) => (
            <ProjecCard project={project} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Newest;
