import logo2 from "../../../assets/images/logo2.png";
import fram1 from "../../../assets/images/Frame (18).png";
import fram2 from "../../../assets/images/Frame (19).png";

const Setin = () => {
  return (
    <div>
      <div className="w-[574px] h-auto pt-4 gap-4 rounded-[16px] border flex py-2 ">
        <img
          src={logo2}
          alt=""
          className="w-10 h-10 gap-0 rounded-[10px] border mb-3 ml-2"
        />
        <div className="flex gap-24 mt-2 ">
          <p className=" text-base font-normal leading-[19.2px] text-left top-8">
            DeFi Protocol Enchancement
          </p>
          <div className="flex space-x-2">
            <div className="rounded-[20px]  bg-[] border border-[#363F72] w-[92px] h-[30px] flex items-center justify-center">
              <p className="   text-[12px] font-normal leading-[14.4px]">
                Completed
              </p>
            </div>
            <div className="rounded-[20px]  bg-[] border border-[#363F72] w-[48px] h-[32px] flex items-center justify-center">
              <img src={fram2} alt="" className="w-[16px] h-[16px]   " />
            </div>
            <div className="rounded-[20px]  bg-[] border border-[#363F72] w-[48px] h-[32px] flex items-center justify-center">
              <img src={fram1} alt="" className="w-[16px] h-[16px]  " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setin;
