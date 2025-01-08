import arrow from "../../../assets/images/arrow6.png";
import Checkbox from "./Checkbox";

const Application = () => {
  return (
    <div>
      <div className="bg-white bg-opacity-5 w-full p-5 gap-4 space-y-2 rounded-[24px]">
        <div className="space-y-3">
          <p className="text-[18px]">Application Settings</p>
          <p className="text-[16px] text-[#B3B8DB]">
            Set up your method for collecting payments
          </p>
        </div>
        <div className="bg-[#101323] w-full rounded-[20px] p-5 space-y-2 max-sm:space-y-4">
          <div className="flex justify-between  max-sm:block max-sm:space-y-4">
            <div className=" mt-2">
              <p className="text-[16px]">Tasks & Contributions</p>
              <p className="text-[#B3B8DB] text-[14px]">
                Default filters for task recommendations
              </p>
            </div>
            <div>
              <div className="flex gap-2  max-sm:block max-sm:space-y-4">
                <div className="space-y-4 ">
                  <div className="flex justify-end max-sm:justify-start">
                    <p>Skill</p>
                  </div>
                  <div className="w-[151px] h-[46px] bg-white bg-opacity-5 rounded-[10px] p-2 flex justify-center items-center max-sm:w-full max-sm:justify-start ">
                    <div className="flex items-center gap-2 max-sm:ml-4">
                      <p>Design, Java</p>
                      <img src={arrow} alt="" className="w-[16px] h-[16px]" />
                    </div>
                  </div>
                </div>
                <div className=" space-y-4 ">
                  <div className="flex justify-end max-sm:justify-start">
                    <p>Experience Level</p>
                  </div>
                  <div className="w-[158px] h-[46px] bg-white bg-opacity-5 rounded-[10px] p-2 flex justify-center items-center max-sm:w-full max-sm:justify-start">
                    <div className="flex items-center gap-2 max-sm:ml-4">
                      <p>Intermediate</p>
                      <img src={arrow} alt="" className="w-[16px] h-[16px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center max-sm:block max-sm:space-y-4">
            <div className=" mt-2">
              <p className=" text-[16px]">
                Auto Join Discord Rooms for New Projects
              </p>
              <p className="text-[#B3B8DB] text-[14px]">
                Default filters for task recommendations
              </p>
            </div>
            <div>
              <div className="flex gap-2">
                <Checkbox />
                Yes
                <Checkbox /> No
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;
