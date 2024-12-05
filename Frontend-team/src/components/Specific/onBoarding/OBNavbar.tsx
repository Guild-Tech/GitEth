// import React from 'react'

import { RootState } from "@/store";
import { useSelector } from "react-redux";

export const OBNavbar = () => {

    const currentIndex = useSelector((state: RootState) => state.onboardingIndex.currentIndex);
  
    return (
        <div className="z-50 p-7 flex justify-between max-sm:flex-col max-sm:gap-12 max-sm:items-center max-sm:px-0 max-sm:py-12">
            <img src="/DarkEthOpenSource.svg" alt="logo" className="w-[172px] " />
            <div className="flex gap-5">
                <div className={`w-14 h-[6px] rounded-full ${currentIndex > 0 ? "bg-[#101323]" : "bg-[#EAECF5]"}`} />
                <div className={`w-14 h-[6px] rounded-full ${currentIndex > 1 ? "bg-[#101323]" : "bg-[#EAECF5]"}`} />
                <div className={`w-14 h-[6px] rounded-full ${currentIndex > 2 ? "bg-[#101323]" : "bg-[#EAECF5]"}`} />
                <div className={`w-14 h-[6px] rounded-full ${currentIndex > 3 ? "bg-[#101323]" : "bg-[#EAECF5]"}`} />
            </div>
        </div>
    )
}
