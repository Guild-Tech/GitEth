import { useEffect } from "react";
import { ContributorsSideBar } from "../../components/Specific/onBoarding/ContributorsSideBar";
import { OBNavbar } from "../../components/Specific/onBoarding/OBNavbar";

import { Contributor } from "./contributors";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { FirstScreen } from "@/components/Specific/onBoarding/FirstScreen";
import { Maintainer } from "./maintainers";

const Onboarding = () => {

  const onboardingInfo = useSelector((state: RootState) => state.onboarding);
  const { currentIndex } = useSelector((state: RootState) => state.onboardingIndex);
  const { role } = useSelector((state: RootState) => state.onboardState);
  console.log(onboardingInfo)

  // useEffect(() => {


  //   return () => {

  //   }
  // }, [])


  return (
    <section className=" min-h-[100vh]  relative z-10 bg-gray-100">
      {/* <div class="relative h-full w-full bg-white"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div></div> */}
      <div className="flex justify-between h-full">
        <div className="sm:w-[35%] bg-[#101323] min-h-[100vh] relative z-30 max-sm:hidden">
          {/* <div className="absolute inset-0 z-20 h-full w-full bg-[#101323] bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:6rem_4rem]  [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#fff_70%,transparent_110%)]"></div> */}

          <ContributorsSideBar />
        </div>
        <div className="sm:w-[65%] max-sm:px-3 w-full bg-gradient-to-b  relative px-12  text-black pb-9">
          <div className=" h-full ">
            <OBNavbar />
            <div className="flex items-center justify-center max-sm:block flex-col h-full">
              {
                currentIndex === 1 ? <FirstScreen /> : role === "contributor" ? <Contributor /> : <Maintainer/>
              }
            </div>
            {/* <Contributor /> */}
          </div>
          {/* <div className="absolute inset-0 z-20 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]  [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#fff_70%,transparent_110%)]"></div> */}
        </div>
      </div>
    </section>
  );
};

export default Onboarding;

export function OnboardingButton(props: any) {
  return (
    <div
      className={` text-black overflow-hidden p-[2px] rounded-3xl ${
        props.active !== props.name
          ? "flex bg-grayBlue"
          : "flex bg-gradient-to-r from-[#E8D07A] to-[#5312D6] "
      }`}
    >
      <button
        className={`flex gap-5 items-center bg-white rounded-3xl p-5 ${
          props.active === props.name ? "bg-[#f8f8f0] " : "bg-white text-black"
        }`}
        onClick={props?.onClick}
      >
        <img src={props.icon} alt="icons" className="w-16" />
        <div className="">
          <h3 className="text-left text[22px] font-medium mb-1">
            {props.title}
          </h3>
          <p className="text-left text-[16px] font-normal">{props.desc}</p>
        </div>
      </button>
    </div>
  );
}
