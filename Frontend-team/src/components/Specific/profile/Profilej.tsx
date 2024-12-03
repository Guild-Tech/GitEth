import rect from "../../../assets/images/Rectangle 3(1).png";
import fram from "../../../assets/images/Frame(1).png";

const Profilej = () => {
  return (
    <div className="mt-28">
      <div className="w-[863px] h-[224px] border border-[#293056] rounded-[20px] p-8 flex ">
        <div>
          <img src={rect} alt="" className="w-[80px] h-[80px] " />
        </div>
        <div className="flex justify-between items-center">
          <p className="font-[Kern] text-[24px] font-medium leading-[28.8px]">
            Adinoyi Ismaila
          </p>
          <button className="flex bg-[#FFFFFF] text-black w-[132px] h-[40px] rounded-[20px] items-center justify-center">
            <img src={fram} alt="" />
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profilej;
