import Dao from "./Dao";
import skillIcon from "../../../assets/icons/skill.svg";
import usdt from "../../../assets/images/usdt.png";
interface IContributorsCard {
  logo: any;
  title: string;
  projectIcon: any;
  projectName: string;
  price: number;
  skills: string[];
}
const ContributorCard = ({
  logo,
  title,
  projectIcon,
  projectName,
  price,
  skills,
}: IContributorsCard) => {
  return (
    <div className=" w-full border border-[#293056] rounded-[26px] mb-3 p-4  max-sm:p-6 ">
      <div className="flex  gap-2 max-sm:block">
        <img src={logo} alt="" />
        <div>
          <h2 className="font-kern text-[24px]">{title}</h2>
          <div className="flex gap-2 mt-2 max-sm:block max-sm:space-y-3">
            <div className="flex  items-center gap-1 rounded-[16px] border border-[#363F72] w-fit h-[33px] justify-center px-3">
              <img src={projectIcon} alt="" className="w-4 h-4" />
              <p>{projectName}</p>
            </div>
            <div className="flex items-center gap-2 ">
              <img src={skillIcon} alt="" className="w-4 h-4" />
              {skills.map((skill: string) => (
                <p>{skill}</p>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <img src={usdt} alt="" className="w-[24px] h-[24px] " />
              <p className="font-matter text-[14px]">{price} USDT</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 ">
        <hr className="border border-[#293056] w-[765px] max-sm:w-full" />
      </div>
      <Dao />
    </div>
  );
};

export default ContributorCard;
