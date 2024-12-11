import React, { useState } from "react";
import logo2 from "../../../assets/images/logo2.png";
import eth from "../../../assets/images/ethereum-eth 1.png";

import circle from "../../../assets/icons/ciclle.png";
import skillIcon from "../../../assets/icons/skill.svg";
import usdt from "../../../assets/images/usdt.png";
import data from "../../../utils/dummydat2.json";
import Nft from "./Nft";
import Dao from "./Dao";
import logo1 from "../../../assets/images/logo3.png";
import con from "../../../assets/images/Container (44).png";
import skillIcon1 from "../../../assets/icons/skill.svg";
import usdt1 from "../../../assets/images/usdt.png";
import arrows from "../../../assets/images/arrow6.png";
import ContributorCard from "./ContributorCard";

const Contribute = () => {
  return (
    <div className="max-sm:mt-12 ">
      <h2 className="font-kern text-[24px]">Contributors</h2>
      <div className="w-full  border border-[#293056] rounded-[26px] flex items-center justify-center p-8 flex-col max-sm:mt-4 bg-white bg-opacity-5">
        <ContributorCard
          logo={logo2}
          title={"DAO Governance Dashboard"}
          projectIcon={circle}
          projectName="Eth Open Source"
          price={5000}
          skills={["React", "DOA", "Governance"]}
        />
        <ContributorCard
          logo={logo1}
          title="NFT Marketplace Expansion"
          projectIcon={con}
          projectName="Zaza"
          price={10000}
          skills={["Web3", "NFT", "SmartContracts"]}
        />
      </div>
    </div>
  );
};

export default Contribute;
