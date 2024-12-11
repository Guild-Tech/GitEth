import Search from "@/components/Common/Search";
// import searchIcon from "../../assets/icons/searchIcon.svg";
import upright from "../../assets/icons/uprightarrow.svg"
import { useState } from "react";
import Card from "../../components/Specific/contributors/Card";
import { FAQ } from "../../components/Specific/contributors/FAQ";
import Filter from "../../components/Specific/contributors/Filter";
export default function Contributor() {
  const [currentScreen, setCurrentScreen] = useState("community");
  return (
    <section className="container mx-auto mt-20 pt-10 max-sm:p-3">
      <Search placeholder="Search suggestions"/>
      <div className="flex justify-between mt-12 w-full gap-5 max-sm:flex-col">
        <div className="max-w-[30%] max-sm:max-w-full max-sm:mx-auto">
          <div className="flex gap-3 p-2 border border-border bg-transparent rounded-full w-fit">
            <button className={`py-2 px-4 text-base ${currentScreen === "community" ? "bg-slate-900 border border-border rounded-full text-white " : ""}`} onClick={() => setCurrentScreen("community")}>Community Forum</button>
            <button className={`py-2 px-4 text-base ${currentScreen === "support" ? "bg-slate-900 border border-border rounded-full text-white " : ""}`} onClick={() => setCurrentScreen("support")}>Support Center</button>
          </div>
          <div className="max-sm:hidden">
            {currentScreen === "community" ? (
              <div className=" mt-8">
                <Filter />
              </div>
            ) : (
              
              <div className="border gap-3 border-border w-fit rounded-3xl py-3 px-4 mt-8 bg-[#293056] bg-opacity-20  backdrop-blur-3xl flex items-center">
                <p className="">Read our Community Guidelines</p>
                <img src={upright} alt="" className="" />
              </div>)
            }
          </div>
        </div>
        <div className="w-[70%] max-sm:w-full ">
          {currentScreen === "community" ? (
            <div className="flex flex-col gap-7">
              <Card/>
              <Card/>
            </div>
          ) : (
            <FAQ/>
          )}
        </div>
      </div>
    </section>
  )
}
