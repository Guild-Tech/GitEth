import { Button } from "@/components/ui/button"
import closeIcon from "../../../assets/icons/closeIcon.svg"
import { categories, tags } from "@/utils/dummyData"
import { useState } from "react";
import Filterbtn from "@/components/Common/Filterbtn";

/**
 * Filter component.
 *
 * This component renders a side panel that allows users to filter projects by categories and tags.
 * The component is responsive and scales according to the screen size.
 *
 * @param {Object} props - Component props
 * @returns {ReactElement} The component JSX
 */
export default function Filter() {
  const [openSide, setOpenSide] = useState(true);
  if (!openSide){
    return (
      <Filterbtn setOpenSide={setOpenSide}/>
    )
  }
  return (
    <div className="border border-border rounded-3xl  w-full bg-[#293056] bg-opacity-20  backdrop-blur-3xl overflow-hidden">
      <div className="border-b border-border p-8">
        <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-medium">Filters</h3>
            <img src={closeIcon} alt="" className="w-[18px] cursor-pointer" onClick={() => setOpenSide(false)}/>
        </div>
        <p className="text-base text-grayBlue">Find projects tailored to your skills and goals.</p>
      </div>
      <div className="p-8">
        <div className="">
            <h4 className="mb-3 text-lg font-medium">Categories</h4>
            <div className="flex gap-2 flex-wrap">
            {categories.map((category, index) => (
                <Button key={index} className="text-sm  text-white  rounded-full border border-border hover:text-black bg-[#15182b] ">{category}</Button>
            ))}
            </div>
        </div>
        <div className="mt-8">
            <h4 className="mb-3 text-lg font-medium">Tags</h4>
            <div className="flex gap-2 flex-wrap">
                {tags.map((tag, index) => (
                    <Button key={index} className="text-sm  text-white  rounded-full border border-border hover:text-black bg-[#15182b] ">{tag}</Button>
                ))}
              
            </div>
        </div>
      </div>
    </div>
  )
}
