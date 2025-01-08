import meta from "../../../assets/images/metamask_symbol.svg.png";
import fram from "../../../assets/images/Frame (25).png";

const Reward = () => {
  return (
    <div>
      <div className="bg-white bg-opacity-5 w-full p-5 gap-4 space-y-2 rounded-[24px] container mx-auto">
        <div className="space-y-3">
          <p className="text-[18px]">Reward Settings</p>
          <p className="text-[16px] text-[#B3B8DB]">
            Set up your method for collecting payments
          </p>
        </div>
        <div className="bg-[#101323] w-full rounded-[20px] p-5 space-y-7">
          <div className="space-y-3">
            <p>Metamask</p>
            <p className="text-[14px] text-[#B3B8DB]">
              Choose whether you want to be visible online
            </p>
          </div>
          <div className="flex justify-between max-sm:block max-sm:space-y-4">
            <div className=" ">
              <input
                type="text"
                className="w-[800px] h-[76px]  bg-[#0D0F1C] rounded-[20px] border border-[#293056] max-sm:w-full"
              />
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-[197px] h-[40px] bg-[#FFFFFF] rounded-[26px] flex items-center justify-center gap-1 cursor-pointer max-sm:w-full">
                <img src={meta} alt="" />
                <p className="text-black text-[16px] f">Connect Metamask</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between max-sm:block max-sm:space-y-4">
            <div className=" ">
              <input
                type="text"
                className="w-[800px] h-[76px] bg-[#0D0F1C] rounded-[20px] border border-[#293056] max-sm:w-full"
              />
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-[157px] h-[40px] bg-[#FFFFFF] rounded-[26px] flex items-center justify-center gap-1 cursor-pointer max-sm:w-full">
                <img src={fram} alt="" />
                <p className="text-black text-[16px] f">Disconnect</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reward;
