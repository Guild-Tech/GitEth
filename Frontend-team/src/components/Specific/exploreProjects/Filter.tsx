import Frame from "../../../assets/icons/Frame (2).png";

const Filter = ({ setOpenSide }: any) => {
  return (
    <div className="h-[743px]   border border-customBlue gap-24 rounded-[24px] mt-20 w-[513px] container max-sm:hidden  bg-white bg-opacity-5">
      <div className="border-b border-border p-2 ">
        <div className="relative">
          <div className="flex items-center justify-between p-4 ">
            <p className="font-bold ">Filters</p>
            <img
              src={Frame}
              alt=""
              onClick={() => setOpenSide(true)}
              className="cursor-pointer"
            />
          </div>
          <p className="ml-4">
            Find projects tailored to your skills and goals.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-start  p-6 gap-1">
        <button className="text-sm  text-white  p-[8px_16px] rounded-[8px]  border border-[#363F72] hover:opacity-80 bg-white bg-opacity-5 ">
          Trending
        </button>
        <button className="  text-sm  text-white  p-[8px_16px] rounded-[8px] border border-[#363F72] hover:opacity-80 bg-white bg-opacity-5 ">
          Most Active
        </button>
      </div>
      <div className="p-2 ml-4">
        <button className="text-sm  text-white  rounded-[8px] border border-[#363F72] hover:opacity-80 bg-white bg-opacity-5  p-[8px_16px] ">
          Active Issues
        </button>
      </div>

      <div className="flex flex-col space-y-2 p-2 ml-4">
        <h1 className="text-white text-base font-semibold">Experience Level</h1>
        <div className="flex space-x-2">
          <button className="text-sm  text-white  rounded-[8px] border border-[#363F72] hover:opacity-80 bg-white bg-opacity-5  p-[8px_16px]">
            Beginner
          </button>
          <button className="text-sm  text-white  rounded-[8px] border border-[#363F72] hover:opacity-80 bg-white bg-opacity-5  p-[8px_16px]">
            Intermediate
          </button>
          <button className="text-sm  text-white  rounded-[8px] border border-[#363F72] hover:opacity-80 bg-white bg-opacity-5 p-[8px_16px]">
            Expert
          </button>
        </div>
      </div>

      <div className="flex flex-col space-y-2 p-2 ml-4">
        <h3 className="text-white text-base font-semibold">Rewards</h3>

        <div className="flex space-x-2">
          <button className="text-sm  text-white  rounded-[8px] border border-[#363F72] hover:opacity-80 bg-white bg-opacity-5  p-[8px_16px]">
            Lowest
          </button>

          <button className="text-sm  text-white  rounded-[8px] border border-[#363F72] hover:opacity-80 bg-white bg-opacity-5  p-[8px_16px]">
            Highest
          </button>
        </div>
      </div>
      <div className="flex flex-col space-y-2 p-2 ml-4">
        <h3 className=" text-white text-base font-semibold">Projects Types</h3>
        <div className="flex space-x-2">
          <button className="text-sm  text-white  rounded-[8px] border border-[#363F72] hover:opacity-80 bg-white bg-opacity-5  p-[8px_16px]">
            Volunteer
          </button>

          <button className="text-sm  text-white  rounded-[8px] border border-[#363F72] hover:opacity-80 bg-white bg-opacity-5  p-[8px_16px]">
            Funded
          </button>
        </div>
      </div>
      <div className="flex flex-col space-y-2 p-2 ml-4">
        <h3 className="text-white text-base font-semibold">Date</h3>
        <div className="flex space-x-2">
          <button className="text-sm  text-white  rounded-[8px] border border-[#363F72] hover:opacity-80 bg-white bg-opacity-5 p-[8px_16px]">
            Newest first
          </button>

          <button className="text-sm  text-white  rounded-[8px] border border-[#363F72] hover:opacity-80 bg-white bg-opacity-5 p-[8px_16px]">
            Oldest First
          </button>
        </div>
      </div>
      <div className="flex flex-col space-y-3 p-2 ml-4">
        <h3 className="text-white text-base font-semibold ">Skills</h3>

        <div className="flex flex-wrap gap-2 ">
          <button className="text-sm  text-white w-[68px] h-[33px]  rounded-[8px] border border-[#363F72] hover:opacity-80 bg-white bg-opacity-5  p-[8px_16px]">
            React
          </button>
          <button className="text-sm  text-white w-[84px]  h-[33px] rounded-[8px] border border-[#363F72] hover:opacity-80 bg-white bg-opacity-5  p-[8px_16px]">
            Security
          </button>
          <button className="text-sm   text-white w-[105px] h-[33px] rounded-[8px] border border-[#363F72] hover:opacity-80 bg-white bg-opacity-5  p-[8px_16px]">
            Community
          </button>
          <button className="text-sm  text-white w-fit h-[33px] rounded-[8px] border border-[#363F72] hover:opacity-80 bg-white bg-opacity-5 p-[8px_16px]">
            UX Design
          </button>
          <button className="text-sm  text-white w-[77px] h-[33px] rounded-[8px] border border-[#363F72] hover:opacity-80 bg-white bg-opacity-5  p-[8px_16px]">
            Solidity
          </button>
          <button className="text-sm  text-white w-[95px] h-[33px] rounded-[8px] border border-[#363F72] hover:opacity-80 bg-white bg-opacity-5  p-[8px_16px]">
            Marketing
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
