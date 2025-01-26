import rect from "../../../assets/images/Rectangle 3(1).png";
import fram from "../../../assets/images/Frame(1).png";
import ram from "../../../assets/images/Frame(2).png";
import ram2 from "../../../assets/images/Frame(3).png";
import fam from "../../../assets/images/Frame(4).png";
import fam1 from "../../../assets/images/Frame(5).png";
import fam2 from "../../../assets/images/Frame(6).png";
const Profilej = () => {
  return (
    <div className=" p-6 w-full  border border-[#293056]  rounded-[26px] mt-28 max-sm:mt-20 max-sm:w-[390px] max-sm:h-[420px] max-sm:p-8  max-sm:block bg-white bg-opacity-5 ">
      <img src={rect} alt="" className="sm:hidden " />
      <div className="flex mt-3   ">
        <img src={rect} alt="" className="max-sm:hidden" />
        <div className="space-y-2 ">
          <div className="flex  justify-between items-center max-sm:block ">
            <p className="font-[Kern] text-[24px] font-medium leading-[28.8px] mr-[420px]   ">
              Adinoyi Ismaila
            </p>
            <button className="flex bg-[#FFFFFF] text-black w-[132px] h-[40px] rounded-[20px] items-center justify-center">
              <img src={fram} alt="" />
              Edit Profile
            </button>
          </div>

          <div className="flex items-center gap-4 justify-between max-sm:block  max-sm:gap- ">
            <div className="flex gap-4 max-sm:gap-6 max-sm:block">
              <p className="w-[107px] h-[33px] bg-[#0D0F1C] border border-[#363F72] rounded-[20px] justify-center items-center flex">
                @noyi_24_7
              </p>
              <p className="flex gap-2 items-center">
                <img src={ram} alt="" className="w-[16px] h-[16px] " />{" "}
                Contributor
              </p>

              <p className="flex gap-3 items-center">
                <img src={ram2} alt="" className="w-[16px] h-[16px] " />
                Nigeria
              </p>
            </div>

            <div className="flex items-center gap-4 ">
              <div className="rounded-[20px] bg-[#0D0F1C] border border-[#363F72] h-[40px] w-[40px] items-center flex justify-center">
                <img src={fam} alt="" className="" />
              </div>
              <div className="rounded-[20px] bg-[#0D0F1C] border border-[#363F72] h-[40px] w-[40px] items-center flex justify-center">
                <img src={fam1} alt="" className="" />
              </div>
              <div className="rounded-[20px] bg-[#0D0F1C] border border-[#363F72] h-[40px] w-[40px] items-center flex justify-center">
                <img src={fam2} alt="" className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 max-sm:hidden">
        <p className="text-[#B3B8DB] ">
          Help improve the security and scalability of a cutting-edge
          decentralized finance protocol. Collaborate with
        </p>
        <p className="text-[#B3B8DB] ">
          experienced developers to optimize smart contracts and create robust
          security measures.
        </p>
      </div>
    </div>
  );
};

export default Profilej;
