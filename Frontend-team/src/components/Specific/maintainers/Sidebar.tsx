import { useState } from "react";
import Frame from "../../../assets/icons/Frame (2).png";
// import { AppDispatch } from "@/store";
// import { useDispatch } from "react-redux";
import { links } from "./links";


interface FilterProps {
  setOpenSide: (isOpen: boolean) => void;
  setLink: (isOpen: string) => void;
}

const Sidebar: React.FC<FilterProps> = ({ setOpenSide, setLink }) => {
  // const dispatch = useDispatch<AppDispatch>();
  const [activeBtn, setActiveBtn] = useState<string>("tasks");
  const handleClick = ( value: string) => {
    setActiveBtn(value);
    setLink(value);
  };

  return (
    <div className="h-fit  border border-customBlue gap-24 rounded-[24px]  pb-5 mb-5 w-full container max-sm:hidden  bg-white bg-opacity-5">
      <div className="border-b border-border p-2 ">
        <div className="relative">
          <div className="flex items-center justify-between p-4 ">
            <p className="font-bold text-2xl">Your Projects</p>
            <img
              src={Frame}
              alt=""
              onClick={() => setOpenSide(true)}
              className="cursor-pointer w-[25px]"
            />
          </div>
          <p className="ml-4 text-grayBlue mb-5">
          View the projects you’ve created and what’s happening with them.          
          </p>
        </div>

      </div>
      <div className="">
        <div className="flex flex-col py-8 px-6 gap-2">
          {links.map((link)=> <div key={link.id} onClick={()=>handleClick(link.link)}  className={ `${activeBtn == link.link? "bg-grayBlue ":"" } w-full bg-opacity-10 py-3 px-4 cursor-pointer rounded-lg`}>{link.title}</div>)}
          
        </div>
      </div>

    </div>
  );
};

export default Sidebar;
