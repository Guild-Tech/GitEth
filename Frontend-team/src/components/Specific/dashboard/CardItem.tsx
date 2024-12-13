import logo1 from "../../../assets/images/logo1.png";
import logo2 from "../../../assets/images/logo2.png";
import logo3 from "../../../assets/images/logo3.png";
import Vector from "../../../assets/icons/Vector.png";
import ProjectCard from "@/components/Common/ProjectCard";
import dropdown from "./Completesetup";
import Completesetup from "./Completesetup";
// import diamond from "../../../assets/icons/diamond.png";

const CardItem = () => {
  interface Project {
    title: string;
    description: string;
    difficulty: string;
    technology: string[];
    icon: string;
  }
  const projects: Project[] = [
    {
      title: "DeFi Protocol Enhancement",
      description:
        "Help improve the security and scalability of a cutting-edge decentralized finance protocol...",
      difficulty: "Intermediate",
      technology: ["Solidity", "Defi", "Security"],
      icon: logo1,
    },
    {
      title: "DAO Governance Dashboard",
      description:
        "Develop a user-friendly interface for DAO members to vote, propose changes, and track...",
      difficulty: "Beginner",
      technology: ["React", "DAO", "Governance"],
      icon: logo2,
    },
    {
      title: "NFT Marketplace Expansion",
      description:
        "Contribute to the development of new features for a popular NFT marketplace. Enhance smart...",
      difficulty: "Expert",
      technology: ["Web3", "NFTs", "SmartContracts"],
      icon: logo3,
    },
  ];
  {
    /* Top Projects Recommended for You */
  }
  return (
    <div className="  w-full container mx-auto ">
      <div className="flex  justify-between  max-sm:flex-col ">
        <h2 className="font-kern text-[36px] font-medium leading-[33.6px] max-sm:text-1xl  mb-10 mr-4 max-sm:mb-5 max-sm:ml-2 text-left max-sm:text-[24px]   ">
          Top Projects Recommended for You
        </h2>
        <p className=" mb-10  ml-4 flex gap-2 max-sm:hidden">
          View all projects{" "}
          <img
            src={Vector}
            alt=""
            className="w-[16px] h-[16px] p-[2.5px] pr-[4.5px] pl-[5.5px] mt-1"
          />
        </p>
        <p className=" mb-5 ml-2  gap-2 hidden max-sm:flex">
          View all projects{" "}
          <img
            src={Vector}
            alt=""
            className="w-[16px] h-[16px] p-[2.5px] pr-[4.5px] pl-[5.5px] mt-1"
          />
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3 max-sm:grid-cols-1 max-sm:gap-3 max-sm:py-4 max-sm:px-2  py-2 ">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
        <Completesetup />
      </div>
    </div>
  );
};

export default CardItem;
