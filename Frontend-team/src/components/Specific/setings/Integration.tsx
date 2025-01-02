import frame from "../../../assets/images/Frame (27).png";
import fram from "../../../assets/images/Frame (25).png";
import frams from "../../../assets/images/Frame (32).png";

const Integration = () => {
  return (
    <div>
      <div className="bg-white bg-opacity-5 w-full p-5 gap-4 space-y-2 rounded-[24px] container mx-auto">
        <div className="space-y-2">
          <p>Integration Settings</p>
          <p className="text-[#B3B8DB] text-[14px]">
            Customise your notification settings to stay informed about
            important updates.
          </p>
        </div>
        <div className="bg-[#101323] w-full rounded-[20px] p-5 space-y-7">
          <div className="space-y-2">
            <p>Github integration</p>
            <p className="text-[14px] text-[#B3B8DB]">
              Choose whether you want to be visible online
            </p>
          </div>
          <div className="flex justify-between">
            <div className=" ">
              <input
                type="text"
                className="w-[800px] h-[76px] bg-[#0D0F1C] rounded-[20px] border border-[#293056]"
              />
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-[157px] h-[40px] bg-[#FFFFFF] rounded-[26px] flex items-center justify-center gap-1 cursor-pointer">
                <img src={frame} alt="" />
                <p className="text-black text-[16px] f">Edit on Github</p>
              </div>
              <div className="w-[157px] h-[40px] bg-[#FFFFFF] rounded-[26px] flex items-center justify-center gap-1 cursor-pointer">
                <img src={fram} alt="" />
                <p className="text-black text-[16px] f">Disconnect</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#101323] w-full rounded-[20px] p-5 space-y-7">
          <div className="space-y-2">
            <p>Discord integration</p>
            <p className="text-[14px] text-[#B3B8DB]">
              Choose whether you want to be visible online
            </p>
          </div>
          <div className="flex justify-between">
            <div className=" ">
              <input
                type="text"
                className="w-[800px] h-[76px] bg-[#0D0F1C] rounded-[20px] border border-[#293056]"
              />
            </div>
            <div className="flex gap-2 items-center cursor-pointer">
              <div className="w-[157px] h-[40px] bg-[#FFFFFF] rounded-[26px] flex items-center justify-center gap-1">
                <img src={frams} alt="" />
                <p className="text-black text-[16px] f">Connect</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integration;
