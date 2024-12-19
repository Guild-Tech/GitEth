import { useState } from "react";
import star from "../../../assets/images/Star (1).png";
import fram from "../../../assets/images/Frame (22).png";
import { Check } from "lucide-react";
import Dot from "../../../assets/icons/Dot.svg";
// import Dot from "lucide-react";

const Completesetup = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className=" ">
      <div className="w-[395px]  bg-white rounded-[20px] p-5 max-sm:hidden">
        <div className="flex justify-between items-center ">
          <div className="flex gap-2">
            <img src={star} alt="" />
            <p className="text-black text-[24px]">Complete Profile Setup</p>
          </div>
          <div
            className="w-[40px] h-[40px] border border-[#D5D9EB] flex items-center justify-center rounded-[20px] cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <img src={fram} alt="" className="text-black" />
          </div>
        </div>
        {isOpen && (
          <div className="mt-6">
            <div className="flex gap-4">
              <div className="flex flex-col items-center gap-1">
                <div className="text-black w-[32px] h-[32px] rounded-[20px] border border-[#D5D9EB] flex items-center justify-center">
                  <Check />
                </div>
                <div className="w-[3px] h-[62px] bg-[#B3B8DB]"></div>
              </div>
              <div>
                <h3 className="text-black font-matter">Set up your profile</h3>
                <p className="text-black">
                  To get started, help us understand your main reason for
                  joining Eth Open Source
                </p>
              </div>
            </div>

            <div className="flex gap-4 mt-2">
              <div className="flex flex-col items-center gap-1">
                <div className="bg-gradient-to-b from-[#E8D07A] to-[#5312D6] w-[32px] h-[32px]  p-[1px] rounded-full overflow-hidden flex items-center justify-center">
                  <div className=" bg-white flex items-center justify-center w-[27px] h-[28px] rounded-full">
                    <img src={Dot} alt="" className="w-3" />
                  </div>
                </div>
                <div className="w-[3px] h-[62px] bg-[#E9D7FE]"></div>
              </div>
              <div>
                <h3 className="text-black font-matter">Verify Information</h3>
                <p className="text-black ">
                  To create your account, we need some basic information
                </p>
              </div>
            </div>
            <div className="flex gap-4 mt-2">
              <div className="flex flex-col items-center gap-1">
                <div className="bg-gradient-to-b from-[#E8D07A] to-[#5312D6] w-[32px] h-[32px]  p-[1px] rounded-full overflow-hidden flex items-center justify-center">
                  <div className=" bg-white flex items-center justify-center w-[27px] h-[28px] rounded-full">
                    <img src={Dot} alt="" className="w-3" />
                  </div>
                </div>
                <div className="w-[3px] h-[62px] bg-[#E9D7FE]"></div>
              </div>
              <div>
                <h3 className="text-black font-matter">Integrate Discord</h3>
                <p className="text-black ">
                  Connect to your discord and have access to community
                  interactions
                </p>
              </div>
            </div>
            <div className="flex gap-4 mt-2">
              <div className="flex flex-col items-center gap-1">
                <div className="bg-gradient-to-b from-[#E8D07A] to-[#5312D6] w-[32px] h-[32px]  p-[1px] rounded-full overflow-hidden flex items-center justify-center">
                  <div className=" bg-white flex items-center justify-center w-[27px] h-[28px] rounded-full">
                    <img src={Dot} alt="" className="w-3" />
                  </div>
                </div>
                <div className="w-[3px] h-[62px] bg-[#E9D7FE]"></div>
              </div>
              <div>
                <h3 className="text-black font-matter">Connect Wallet</h3>
                <p className="text-black ">
                  Get paid in Ethereum and make Web3 transactions convenient.
                </p>
              </div>
            </div>
            <div className="flex gap-4 mt-2">
              <div className="flex flex-col items-center gap-1">
                <div className="bg-gradient-to-b from-[#E8D07A] to-[#5312D6] w-[32px] h-[32px]  p-[1px] rounded-full overflow-hidden flex items-center justify-center">
                  <div className=" bg-white flex items-center justify-center w-[27px] h-[28px] rounded-full">
                    <img src={Dot} alt="" className="w-3" />
                  </div>
                </div>
                <div className="w-[3px] h-[62px] bg-[#E9D7FE]"></div>
              </div>
              <div>
                <h3 className="text-black font-matter">
                  Accept Terms and Condition
                </h3>
                <p className="text-black ">
                  To create your account, we need some basic information
                </p>
              </div>
            </div>
            <div className="flex gap-4 mt-2">
              <div className="flex flex-col items-center gap-1">
                <div className="bg-gradient-to-b from-[#E8D07A] to-[#5312D6] w-[32px] h-[32px]  p-[1px] rounded-full overflow-hidden flex items-center justify-center">
                  <div className=" bg-white flex items-center justify-center w-[27px] h-[28px] rounded-full">
                    <img src={Dot} alt="" className="w-3" />
                  </div>
                </div>
                <div className="w-[2.5px] h-[62px] bg-[#E9D7FE]"></div>
              </div>
              <div>
                <h3 className="text-black font-matter">
                  Complete Your Profile
                </h3>
                <p className="text-black ">
                  Provide additional information to help maintainers better
                  match you with suitable projects.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Completesetup;
