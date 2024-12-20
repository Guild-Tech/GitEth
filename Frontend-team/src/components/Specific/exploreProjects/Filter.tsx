import { useState } from "react";
import Frame from "../../../assets/icons/Frame (2).png";
import { AppDispatch } from "@/store";
import { useDispatch } from "react-redux";
import { setFilters } from "@/store/reducers/projectsSlice";

// Define the shape of the active state
interface ActiveBtnState {
  trending: string;
  experience: string;
  rewards: string;
  projects: string;
  date: string;
  skills: string;
}

interface FilterProps {
  setOpenSide: (isOpen: boolean) => void;
}

const Filter: React.FC<FilterProps> = ({ setOpenSide }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [activeBtn, setActiveBtn] = useState<ActiveBtnState>({
    trending: "",
    experience: "",
    rewards: "",
    projects: "",
    date: "",
    skills: "",
  });
  const handleActive = (group: keyof ActiveBtnState, value: string) => {
    if(activeBtn[group] === value){
      setActiveBtn((prev) => ({ ...prev, [group]: "" }));
    } else{
      setActiveBtn((prev) => ({ ...prev, [group]: value }));
    }
  };

  const getButtonClass = (group: keyof ActiveBtnState, value: string) =>
    activeBtn[group] === value
      ? "bg-blue-600 border-blue-600"
      : "bg-[#101323] border-[#363F72]";

  return (
    <div className="h-fit  border border-customBlue gap-24 rounded-[24px] mt-20 pb-5 mb-5 w-[513px] container max-sm:hidden  bg-white bg-opacity-5">
      <div className="border-b border-border p-2 ">
        <div className="relative">
          <div className="flex items-center justify-between p-4 ">
            <p className="font-bold ">Filters</p>
            <img
              src={Frame}
              alt=""
              onClick={() => setOpenSide(true)}
              className="cursor-pointer"
            />
          </div>
          <p className="ml-4">
            Find projects tailored to your skills and goals.
          </p>
        </div>
      </div>

      {/* Trending and Most Active */}
      <div className="flex items-center justify-start mt-4 p-6 gap-1">
        {["Trending", "Most Active"].map((btn) => (
          <button
            key={btn}
            onClick={() => {handleActive("trending", btn); activeBtn.trending === btn ? dispatch(setFilters({ difficulty: "" as any})) : dispatch(setFilters({ difficulty: btn as any }))}}
            className={`text-sm  text-white  p-[8px_16px] rounded-[8px]  border border-[#363F72] hover:opacity-80 bg-white bg-opacity-5 ${getButtonClass(
              "trending",
              btn
            )}`}
          >
            {btn}
          </button>
        ))}
      </div>

      {/* Active Issues */}
      <div className="p-5 ml-4">
        <button
          onClick={() => handleActive("trending", "Active Issues")}
          className={`text-sm  text-white  rounded-[8px] border border-[#363F72] hover:opacity-80 bg-white bg-opacity-5  p-[8px_16px] ${getButtonClass(
            "trending",
            "Active Issues"
          )}`}
        >
          Active Issues
        </button>
      </div>
      {/* Experience Level */}
      <div className="flex flex-col space-y-2 p-2 ml-4">
        <h1 className="text-white text-base font-semibold">Experience Level</h1>
        <div className="flex space-x-2">
          {["Beginner", "Intermediate", "Expert"].map((level) => (
            <button
              key={level}
              onClick={() => {handleActive("experience", level); activeBtn.experience === level ? dispatch(setFilters({ difficulty: "" as any})) : dispatch(setFilters({ difficulty: level as any }))}}
              className={`text-sm  text-white  rounded-[8px] border border-[#363F72] hover:opacity-80 bg-white bg-opacity-5  p-[8px_16px] ${getButtonClass(
                "experience",
                level
              )}`}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      {/* Rewards */}
      <div className="flex flex-col space-y-2 p-2 ml-4">
        <h3 className="text-white text-base font-semibold">Rewards</h3>
        <div className="flex space-x-2">
          {["Lowest", "Highest"].map((reward) => (
            <button
              key={reward}
              onClick={() => {handleActive("rewards", reward); activeBtn.rewards === reward ? dispatch(setFilters({ rewards: "" as any})) : dispatch(setFilters({ rewards: reward as any }))}}
              className={`text-sm  text-white  rounded-[8px] border border-[#363F72] hover:opacity-80 bg-white bg-opacity-5  p-[8px_16px] ${getButtonClass(
                "rewards",
                reward
              )}`}
            >
              {reward}
            </button>
          ))}
        </div>
      </div>


      {/* Projects Types */}
      <div className="flex flex-col space-y-2 p-2 ml-4">
        <h3 className="text-white text-base font-semibold">Projects Types</h3>
        <div className="flex space-x-2">
          {["Volunteer", "Funded"].map((type) => (
            <button
              key={type}
              onClick={() => {handleActive("projects", type); activeBtn.projects === type ? dispatch(setFilters({ status: "" as any})) : dispatch(setFilters({ status: type as any }))}}
              className={`text-sm  text-white  rounded-[8px] border border-[#363F72] hover:opacity-80 bg-white bg-opacity-5  p-[8px_16px] ${getButtonClass(
                "projects",
                type
              )}`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Date */}
      <div className="flex flex-col space-y-2 p-2 ml-4">
        <h3 className="text-white text-base font-semibold">Date</h3>
        <div className="flex space-x-2">
          {["Newest first", "Oldest First"].map((date) => (
            <button
              key={date}
              onClick={() => {handleActive("date", date); activeBtn.date === date ? dispatch(setFilters({ status: "" as any})) : dispatch(setFilters({ status: date as any }))}}
              className={`text-sm  text-white  rounded-[8px] border border-[#363F72] hover:opacity-80 bg-white bg-opacity-5 p-[8px_16px] ${getButtonClass(
                "date",
                date
              )}`}
            >
              {date}
            </button>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="flex flex-col space-y-3 p-2 ml-4">
        <h3 className="text-white text-base font-semibold">Skills</h3>
        <div className="grid grid-cols-3 gap-2">
          {["React", "Security", "Community", "UX Design", "Solidity", "Marketing"].map((skill) => (
            <button
              key={skill}
              onClick={() => {handleActive("skills", skill); activeBtn.skills === skill ? dispatch(setFilters({ skills: [] })) :  dispatch(setFilters({ skills: [skill.toLowerCase()]  }))}}
              className={`text-sm  text-white w-fit h-[33px]  rounded-[8px] border border-[#363F72] hover:opacity-80 bg-white bg-opacity-5  p-[8px_16px] ${getButtonClass(
                "skills",
                skill
              )}`}
            >
              {skill}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
