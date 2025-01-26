import Vector from "../../../assets/icons/Vector.png";
import data from "../../../utils/dummydat2.json";

// The Dashboard2 component represents a dashboard section displaying a user's contributor history.
// It includes a title, a brief overview, and a list of contributions with details like task title, status, and associated icons.
// Tailwind CSS classes are used for styling, and the `data` array is mapped to dynamically render the list of contributions.

const Dashboard2 = () => {
  return (
    <div className="text-white   max-sm:py-4 max-sm:px-2    gap6 max-sm:gap-3  container w-full  ">
      <div className=" bg-white bg-opacity-5   border border-customBlue container    top-[139px]  gap-[24px] rounded-[24px]  h-[540px]  max-sm:h-[552px] ">
        <div className="border-b border-border p-8">
          <div className="flex justify-between items-center">
            <h2 className=" sm:text-lg lg:text-xl text-lg font-kern text-[24px] ">
              Contributor History
            </h2>
            <p className=" text-sm sm:text-base flex gap-2 max-sm:hidden text-[16px]">
              View all Contributors{" "}
              <img
                src={Vector}
                alt=""
                className="w-[16px] h-[16px] p-[2.5px] pr-[4.5px] pl-[5.5px] mt-1"
              />
            </p>
          </div>
          <p className="mt-4  text-[18px] font-normal color-gray-400 text-left text-sm sm:text-base text-[#B3B8DB]">
            Here's an overview of your completed tasks, pull requests & commits.
          </p>
          <p className=" text-sm sm:text-base gap-2 hidden max-sm:flex  max-sm:mt-5">
            View all Contributors{" "}
            <img
              src={Vector}
              alt=""
              className="w-[16px] h-[16px] p-[2.5px] pr-[4.5px] pl-[5.5px] mt-1"
            />
          </p>
        </div>
        <div className="space-y-4 py-8  p-5  ">
          {/* Map through the data */}
          {data.map((item) => (
            <div
              key={item.id}
              className=" h-auto pt-4 gap-4 rounded-[16px] border flex py-3 p-3 max-sm:w-[400px] justify-between  items-center "
            >
              <div className="flex gap-3  ">
                <img
                  src={item.logo1}
                  alt=""
                  className="w-[40px] h-[40px] gap-0   mb-2 "
                />

                <p className="text-base font-normal leading-[19.2px] text-left top-8 mt-2">
                  {item.title}
                </p>
              </div>
              <div className="flex space-x-2 ">
                <div className="rounded-[20px] bg-[] border border-[#363F72] w-[92px] h-[30px] flex items-center justify-center">
                  <p className="text-[12px] font-normal leading-[14.4px]">
                    {item.status1}
                  </p>
                </div>
                {item.icons1?.map((icon) => (
                  <div
                    key={icon.id}
                    className="rounded-[20px] bg-[] border border-[#363F72] w-[48px] h-[32px] flex items-center justify-center"
                  >
                    <img
                      src={icon.src}
                      alt={icon.alt}
                      className="w-[16px] h-[16px]"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard2;
