import logo2 from "../../../assets/images/logo3.png";
import con from "../../../assets/images/Container (44).png";
import skillIcon from "../../../assets/icons/skill.svg";
import usdt from "../../../assets/images/usdt.png";
import arrows from "../../../assets/images/arrow6.png";

const Nft = () => {
  return (
    <div className="">
      <div className="w-[799px] h-[200px] border border-[#293056] rounded-[26px]   mt-8 p-6">
        <div className="flex gap-2">
          <img src={logo2} alt="" />
          <div>
            <h2 className="font-kern text-[24px]">NFT Marketplace Expansion</h2>
            <div className="flex gap-2 mt-2 ">
              <div className="flex  items-center gap-1 rounded-[16px] border border-[#363F72] w-[78px] h-[33px] justify-center">
                <img src={con} alt="" className="w-5 h-5" />
                <p>Zaza</p>
              </div>
              <div className="flex items-center gap-2 ">
                <img src={skillIcon} alt="" className="w-4 h-4" />
                <p>Web3,</p>
                <p>NFT,</p>
                <p>SmartContracts</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={usdt} alt="" className="w-[24px] h-[24px] " />
                <p className="font-matter text-[14px]">10,000 USDT</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <hr className="border border-[#293056] w-[765px]" />
        </div>
        <div className="flex justify-between mt-1">
          <p className="text-[20px]">Task</p>
          <img src={arrows} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Nft;
