import { useState } from "react";
import logo1 from "../../../assets/images/logo1.png";

import elis2 from "../../../assets/images/Ellipse 5 (1).png";
import frame1 from "../../../assets/icons/Frame (14).png";
import frame2 from "../../../assets/icons/Frame (15).png";
import frame3 from "../../../assets/icons/Frame (16).png";
import arrow from "../../../assets/images/arrow6.png";
import clock from "../../../assets/images/Frame (17).png";
import eth from "../../../assets/images/ethereum-eth 1.png";

import arrows from "../../../assets/images/Frame (8).png";

const ProcjectCard = () => {
  const [expand, setExpand] = useState(false);
  return (
    <div className="w-full  border border-[#293056]  rounded-[16px] p-5 max-sm:w-full mt-5">
      <div className="flex items-center justify-between">
        <h2 className="w-[682px] h-[29px] font-sans text-[24px] font-medium leading-[28.8px] ">
          DeFi Protocol Enhancement
        </h2>
        <button className="bg-slate-100  rounded-[20px] p-2">
          <p className="font-sans text-[16px] font-normal leading-[19.2px] text-black">
            Contribute
          </p>
        </button>
      </div>

      <div className="flex gap-4 mt-4">
        <img src={logo1} alt="" className="w-[80px] h-[80px]" />
        <div className="flex flex-col gap-2">
          <h2 className="font-kern text-[24px] font-medium leading-[28.8px]">
            Create a Voting Smart Contract
          </h2>

          <div className="flex gap-2  ">
            <span className="w-[81px] h-[33px] rounded-[20px] bg-[#0D0F1C] border border-[#363F72] flex gap-2 ">
              <img src={elis2} alt="" className="mt-2 ml-2 w-[16px] h-[16px]" />
              <p className="font-matter text-[14px] font-normal leading-[16.8px] w-[33px] h-[17px] flex items-center justify-center mt-1">
                {" "}
                Vhee
              </p>
            </span>
            <div className="flex gap-2">
              <img src={frame1} alt="" className="w-[16px] h-[16px] mt-1" />{" "}
              <p>Bug</p>
            </div>
            <div className="flex gap-2">
              <img src={frame2} alt="" className="w-[16px] h-[16px] mt-1" />
              <p>5 months ago</p>
            </div>
            <div className="flex gap-2">
              <img src={frame3} alt="" className="w-[16px] h-[16px] mt-1" />
              <p>17 Applicants</p>
            </div>
            <div>
              <button className="w-[112px] h-[33px] border border-customBlue rounded-[20px]">
                Intermediate
              </button>
            </div>
            <div className="">
              <button className="w-[112px] h-[33px] border border-customBlue rounded-[20px]">
                In-Progress
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-6" />
      <div className="mt-4">
        <div className="flex justify-between">
          <h1 className="font-kern text-[20px] font-medium leading-[24px]">
            Task Details
          </h1>{" "}
          <img
            src={expand ? arrow : arrows}
            alt=""
            onClick={() => setExpand(!expand)}
          />
        </div>
        {expand && (
          <div>
            <p className="mt-3">Description:</p>
            <p className="font-matter text-[16px] font-normal leading-[22.4px] text-[#B3B8DB]">
              Develop a secure, gas-efficient smart contract for the voting
              functionality. The contract should allow users to
            </p>
            <p className="text-[#B3B8DB]">
              cast votes, view results, and close voting sessions automatically
              after a set deadline.
            </p>
            <div className="mt-6">
              <p>Requirements:</p>
              <div className="ml-2">
                <li className="text-[#B3B8DB]">Language: Solidity</li>
                <li className="text-[#B3B8DB]">
                  Experience Level: Intermediate
                </li>
                <li className="text-[#B3B8DB]">
                  Skills Needed: Smart Contract Development, Security Best
                  Practices, Gas Optimization
                </li>
              </div>
            </div>
            <div className="mt-6">
              <p>Tasks:</p>
              <div className="ml-4">
                <ol className="list-decimal">
                  <li className="text-[#B3B8DB]">
                    Define Voting Structure: Create structs and mappings to
                    represent votes, candidates, and voters.
                  </li>
                  <li className="text-[#B3B8DB]">
                    Implement Voting Logic: Write functions to register voters,
                    cast votes, and retrieve results.
                  </li>
                  <li className="text-[#B3B8DB]">
                    Testing: Write test cases using Hardhat to ensure contract
                    functions work as expected.
                  </li>
                  <li className="text-[#B3B8DB]">
                    Documentation: Add comments and README on contract use,
                    functions, and limitations.
                  </li>
                </ol>
              </div>
              <hr className="mt-3" />
              <div className="flex gap-2 mt-4">
                <img src={clock} alt="" className="w-[18px] h-[18px] mt-1" />
                <p>12-15</p>
                <div className="flex gap-2">
                  <p className="text-[#B3B8DB]">Hours to complete</p>
                </div>
                <div className="flex gap-2">
                  <img src={eth} alt="" className="w-[18px] h-[20px] mt-1" />
                  <p>0.2 ETH</p>
                </div>
                <p className="text-[#B3B8DB]">Reward</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProcjectCard;
