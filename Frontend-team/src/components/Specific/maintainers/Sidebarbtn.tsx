import vector from "../../../assets/icons/Vector (1).png";

const Sidebarbtn = ({ setOpenSide }: any) => {
  return (
    <div>
      <div
        className="flex items-center justify-center rounded-[25px] border border-border w-[147px] h-[77px] gap-3 mt-32 cursor-pointer max-sm:hidden"
        onClick={() => setOpenSide(false)}
      >
        <img src={vector} alt="" className=" " />
        <p className="text-[#B3B8DB]">Your Projects</p>
      </div>
    </div>
  );
};

export default Sidebarbtn;
