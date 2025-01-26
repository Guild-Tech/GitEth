import Vector from "../../../assets/icons/Vector.png";

import data from "../../../utils/dummydat2.json";
const Dashboard = () => {
  return (
    <div className=" text-white   max-sm:py-4 max-sm:px-2     container w-full   ">
      {/* My Projects Section */}
      <div className="bg-white bg-opacity-5  border border-customBlue     top-[139px] gap-[24px] rounded-[24px] border-t-[1px]    h-[540px]   ">
        <div className="border-b border-border p-8">
          <div className=" flex justify-between ">
            <h2 className="sm:text-lg lg:text-xl text-lg font-kern text-[24px] ">
              My Projects
            </h2>
            <p className="  flex gap-2  max-sm:hidden text-[16px]">
              View all project
              <img
                src={Vector}
                alt=""
                className="w-[16px] h-[16px] p-[2.5px] pr-[4.5px] pl-[5.5px] mt-1  "
              />
            </p>
          </div>

          <p className="mt-4 text-sm sm:text-base   text-[18px] font-normal color-gray-400 text-left text-[#B3B8DB]  ">
            Here's an overview of your active, pending and completed projects.
          </p>
          <p className="   gap-2 hidden max-sm:flex  max-sm:mt-5">
            View all project
            <img
              src={Vector}
              alt=""
              className="w-[16px] h-[16px] p-[2.5px] pr-[4.5px] pl-[5.5px] mt-1   "
            />
          </p>
        </div>
        <div className="space-y-4 py-8  p-6 ">
          {data.map((item) => (
            <div
              key={item.id}
              className="w-full h-fit pt-4 gap-4 rounded-[16px] border flex flex-wrap max-sm:h-20 "
            >
              <img
                src={item.logo}
                alt="Logo"
                className="w-10 h-10 gap-0 rounded-[10px] border mb-3 ml-2"
              />

              <div className="text-base font-normal leading-[19.2px] text-left top-8  ">
                <div>{item.title}</div>
                <div className="w-[331px] bg-gray-200 rounded h-1 dark:bg-black mt-4 max-sm:hidden">
                  <div
                    className="bg-gray-100 h-1 rounded"
                    style={{
                      width: `${
                        item.progress?.completed && item.progress?.total
                          ? (item.progress.completed / item.progress.total) *
                            100
                          : 0
                      }%`,
                    }}
                  ></div>
                </div>
              </div>

              <div className="space-x-4 ml-auto mb-1 max-sm:hidden ">
                <div className="text-gray-400 text-sm p-2 max-sm:mb-12">
                  <span className="flex gap-2">
                    <img
                      src={item.icons?.[0]?.src}
                      alt={item.icons?.[0]?.alt || "Default Alt Text"}
                    />
                    Due by {item.dueDate}
                  </span>
                  <span>{`${item.progress?.completed || 0}/${
                    item.progress?.total || 0
                  } Tasks Completed`}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
