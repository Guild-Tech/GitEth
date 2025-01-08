import fram from "../../../assets/images/Frame (20).png";
import usdt from "../../../assets/images/usdt.png";
const Profileoverview = () => {
  return (
    <div className="w-[413px] h-[507px] border border-[#293056] max-sm:w-full rounded-[26px] mt-28 max-sm:mt-12  max-sm:h-fit bg-white bg-opacity-5">
      <div className="border-b border-border p-6">
        <div className="flex gap-4 items-center">
          <img src={fram} alt="" className="w-[24px] h-[24px]" />
          <p className=" text-[24px] font-kern">Profile Overview</p>
        </div>
        <div className="gap-4">
          <p>
            Get better understanding of what the project entails and if you fit
            in.
          </p>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div className="">
          <p className="text-[18px]">Earning</p>
        </div>
        <div className="flex gap-3">
          <img src={usdt} alt="" className="w-[24px] h-[24px]" />
          <p className="text-[14px]">15,000 USDT</p>
        </div>
        <div className=" gap-4 space-y-4 ">
          <p className="text-[18px] mt-2">Skills</p>
          <div className="flex flex-wrap gap-2 max-sm:flex-wrap max-sm:gap-">
            <button className="text-sm  text-white w-[68px] h-[33px]  rounded-[8px] border border-[#363F72] hover:opacity-80 bg-white bg-opacity-5  p-[8px_16px]">
              React
            </button>
            <button className="text-sm  text-white w-[84px]  h-[33px] rounded-[8px] border border-[#363F72] hover:opacity-80 bg-white bg-opacity-5  p-[8px_16px]">
              Security
            </button>
            <button className="text-sm   text-white w-[105px] h-[33px] rounded-[8px] border border-[#363F72] hover:opacity-80 bg-white bg-opacity-5  p-[8px_16px]">
              Community
            </button>
            <button className="text-sm  text-white w-fit h-[33px] rounded-[8px] border border-[#363F72] hover:opacity-80 bg-white bg-opacity-5  p-[8px_16px]">
              UX Design
            </button>
            <button className="text-sm  text-white w-[77px] h-[33px] rounded-[8px] border border-[#363F72] hover:opacity-80 bg-white bg-opacity-5  p-[8px_16px]">
              Solidity
            </button>
            <button className="text-sm  text-white w-[95px] h-[33px] rounded-[8px] border border-[#363F72] hover:opacity-80 bg-white bg-opacity-5  p-[8px_16px]">
              Marketing
            </button>
          </div>
        </div>
        <div className="space-y-4 ">
          <p className="text-[18px] font-kern">Tasks Overview</p>
          <div className="flex gap-4 max-sm:block max-sm:space-y-2">
            <button className="text-sm  text-white w-[170.5px] h-[70px] rounded-[8px] border border-[#363F72] hover:opacity-80 bg-white bg-opacity-5 max-sm:w-full flex flex-col p-3 space-y-2 ">
              <p className="font-kern text-[24px]">5</p>
              <p className=" ">Ongoing Issues</p>
            </button>

            <button className="text-sm  text-white w-[170.5px] h-[70px] rounded-[8px] border border-[#363F72] hover:opacity-80 bg-white bg-opacity-5 max-sm:w-full flex flex-col p-3 space-y-2 ">
              <p className="font-kern text-[24px]">10</p>
              <p className=" ">Completed issues</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profileoverview;
