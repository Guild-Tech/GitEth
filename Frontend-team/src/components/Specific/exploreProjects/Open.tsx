import vector from "../../../assets/icons/Vector (1).png";
import fram2 from "../../../assets/images/Frame (7).png";
const Filterbtn = ({ setOpenSide }: any) => {
  return (
    <div>
      <div
        className="flex items-center justify-center rounded-[25px] border border-gray-400 w-[88px] h-[41px] gap-3 mt-20 cursor-pointer max-sm:hidden"
        onClick={() => setOpenSide(false)}
      >
        <img src={vector} alt="" className=" " />
        <p className="text-black">Filters</p>
      </div>
    </div>
  );
};

export default Filterbtn;
