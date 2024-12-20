import { useState } from "react";
import logo1 from "../../../assets/images/logo1.png";
import circle from "../../../assets/icons/ciclle.png";
import skillIcon from "../../../assets/icons/skill.svg";

import elis2 from "../../../assets/images/Ellipse 5 (1).png";
import frame1 from "../../../assets/icons/Frame (14).png";
import frame2 from "../../../assets/icons/Frame (15).png";
import frame3 from "../../../assets/icons/Frame (16).png";
import arrow from "../../../assets/images/arrow6.png";
import arrows from "../../../assets/images/Frame (8).png";
import clock from "../../../assets/images/Frame (17).png";
import eth from "../../../assets/images/ethereum-eth 1.png";
import ProcjectCard from "./ProcjectCard";
import ProjecCard from "./ProjecCard";
import Project from "./Project";
import Open from "./Open";

const Carditem = () => {
  const [expand, setExpand] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }; // Toggle modal visibility

  return (
    <div className="w-full ">
      <div className="w-full h-[204px] rounded-[16px] border border-[#293056] mt-8 p-5  flex  gap-2  max-sm:w-[500px] max-sm:hidden bg-white bg-opacity-5">
        <img src={logo1} alt="" className="w-[80px] h-[80px] " />

        <div className="flex  flex-col  ">
          <p className="font-custom text-2xl font-medium leading-[28.8px] tracking-[-0.015em]">
            DeFi Protocol Enhancement
          </p>
          <div className="flex gap-4 mt-4">
            <div className="flex  items-center gap-1 rounded-[16px] border border-[#363F72] w-fit h-[33px] p-1 bg-black ">
              <img src={circle} alt="" className="w-4 h-4 " />
              <p>Eth Open Source</p>
            </div>
            <div className="flex items-center gap-2 ">
              <img src={skillIcon} alt="" className="w-4 h-4" />
              <p>Solidity,</p>
              <p>DeFi,</p>
              <p>Security</p>
            </div>
          </div>

          <div className="w-[700px] h-[44px]  max-sm:w-[600px]">
            <p className="mt-4 text-[#B3B8DB]">
              Help improve the security and scalability of a cutting-edge
              decentralized finance protocol. Collaborate with experienced
              developers to optimize smart contracts and create robust security
              measures.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 max-sm:w-full ">
        <h2
          className="font-
Kern font-[24px] text-[24px]"
        >
          Available Tasks
        </h2>
        <div className="w-full border border-[#293056] mt-5 rounded-[16px] p-5 max-sm:w-full bg-white bg-opacity-5">
          <div className="flex items-center justify-between">
            <h2 className="w-[682px] h-[29px] font-sans text-[24px] font-medium leading-[28.8px] ">
              DeFi Protocol Enhancement
            </h2>
            <button
              className="bg-slate-100  rounded-[20px] p-2"
              onClick={toggleModal}
            >
              <p className=" text-[16px] font-normal leading-[19.2px] text-black">
                Contribute
              </p>
            </button>
          </div>

          <div className="flex gap-4 mt-4 max-sm:grid max-sm:grid-cols-1">
            <img src={logo1} alt="" className="w-[80px] h-[80px] max-sm:mt-4" />
            <div className="flex flex-col gap-2 ">
              <h2 className="font-kern text-[24px] font-medium leading-[28.8px]">
                Create a Voting Smart Contract
              </h2>

              <div className="flex gap-2 max-sm:flex-wrap items-center">
                <span className="w-[81px] h-[33px] rounded-[20px] bg-black border border-[#363F72] flex gap-2 items-center p-2 ">
                  <img src={elis2} alt="" className=" w-[16px] h-[16px]" />
                  <p className=" text-[14px] font-normal leading-[16.8px] w-[33px] h-[17px] ">
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
                  <button className="w-[112px] h-[33px] border border-customBlue rounded-[20px] bg-white bg-opacity-5">
                    Intermediate
                  </button>
                </div>
                <div className="">
                  <button className="w-[112px] h-[33px] border border-customBlue rounded-[20px] bg-white bg-opacity-5">
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
              <div className=" ">
                <p className="mt-3">Description:</p>
                <p className="font-matter text-[16px] font-normal leading-[22.4px] text-[#B3B8DB]">
                  Develop a secure, gas-efficient smart contract for the voting
                  functionality. The contract should allow users to
                </p>
                <p className="text-[#B3B8DB]">
                  cast votes, view results, and close voting sessions
                  automatically after a set deadline.
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
                        Implement Voting Logic: Write functions to register
                        voters, cast votes, and retrieve results.
                      </li>
                      <li className="text-[#B3B8DB]">
                        Testing: Write test cases using Hardhat to ensure
                        contract functions work as expected.
                      </li>
                      <li className="text-[#B3B8DB]">
                        Documentation: Add comments and README on contract use,
                        functions, and limitations.
                      </li>
                    </ol>
                  </div>
                  <hr className="mt-3" />
                  <div className="flex gap-2 mt-4 max-sm:flex-wrap">
                    <img
                      src={clock}
                      alt=""
                      className="w-[18px] h-[18px] mt-1"
                    />
                    <p>12-15</p>
                    <div className="flex gap-2">
                      <p className="text-[#B3B8DB]">Hours to complete</p>
                    </div>
                    <div className="flex gap-2 ">
                      <img
                        src={eth}
                        alt=""
                        className="w-[18px] h-[20px] mt-1"
                      />
                      <p>0.2 ETH</p>
                      <p className="text-[#B3B8DB]">Reward</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <Open isOpen={isModalOpen} onClose={toggleModal} />
      </div>

      <div className="ml-[2px] mt-4 min-h-screen ">
        <ProcjectCard />
        <ProjecCard />
        <Project />
      </div>
    </div>
  );
};

export default Carditem;
