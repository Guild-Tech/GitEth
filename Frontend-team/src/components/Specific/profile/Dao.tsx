import { useState } from "react";
import data from "../../../utils/dummydat2.json";
import arrow from "../../../assets/images/arrow6.png";
import arrows from "../../../assets/images/Frame (8).png";

const Dao = () => {
  const [expand, setExpand] = useState(false);
  return (
    <div className="">
      <div className="flex justify-between mt-1">
        <p className="text-[20px]">Task</p>
        <img
          className="cursor-pointer"
          src={expand ? arrows : arrow}
          alt=""
          onClick={() => setExpand(!expand)}
        />
      </div>
      {expand && (
        <div className="space-y-6 ">
          {data.slice(0, 1).map((item1) => (
            <div
              key={item1.id}
              className="w-full h-fit pt-4 gap-4 rounded-[16px] border  max-sm:block max-sm:p-3  max-sm:h-[116px] mt-6  p-3 "
            >
              <div className="flex gap-3 items-center max-sm:block">
                <img
                  src={item1.logo}
                  alt="Logo"
                  className="w-10 h-10 gap-0 rounded-[10px] border  max-sm:w-[40px] max-sm:h-[40px] max-sm:hidden"
                />
                <div>
                  <div className="flex justify-between items-center gap-8 max-sm:block">
                    <div className="max-sm:flex max-sm:gap-3">
                      <img
                        src={item1.logo}
                        alt="Logo"
                        className="w-10 h-10 gap-0 rounded-[10px] border  max-sm:w-[40px] max-sm:h-[40px] sm:hidden"
                      />
                      <div className="max-sm:space-y-2">
                        <p className="text-base font-normal leading-[19.2px] text-left top-8 max-sm:text-[16px]">
                          {" "}
                          {item1.title}
                        </p>
                        <div className="sm-hidden">
                          <span className="flex gap-2 sm:hidden text-[#B3B8DB]">
                            <img
                              src={item1.icons?.[0]?.src}
                              alt={item1.icons?.[0]?.alt || "Default Alt Text"}
                            />
                            Due by {item1.dueDate}
                          </span>

                          <span className="text-[#B3B8DB] text-sm sm:hidden ">{`${
                            item1.progress?.completed || 0
                          }/${
                            item1.progress?.total || 0
                          } Tasks Completed`}</span>
                        </div>
                      </div>
                    </div>

                    <div className="  max-sm:gap-2 max-sm:hidden">
                      <div className="text-gray-400 text-sm p-2">
                        <span className="flex gap-2">
                          <img
                            src={item1.icons?.[0]?.src}
                            alt={item1.icons?.[0]?.alt || "Default Alt Text"}
                          />
                          Due by {item1.dueDate}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between gap-8 items-center">
                    <div className="w-[492px] bg-gray-200 rounded h-1 dark:bg-black  max-sm:hidden ">
                      <div
                        className="bg-gray-100 h-1 rounded"
                        style={{
                          width: `${
                            item1.progress?.completed && item1.progress?.total
                              ? (item1.progress.completed /
                                  item1.progress.total) *
                                100
                              : 0
                          }%`,
                        }}
                      ></div>
                    </div>
                    <div className="max-sm:hidden">
                      <span className="text-gray-400 text-sm ">{`${
                        item1.progress?.completed || 0
                      }/${item1.progress?.total || 0} Tasks Completed`}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {data.slice(0, 2).map((item) => (
            <div
              key={item.id}
              className=" h-auto pt-4 gap-4 rounded-[16px] border flex py-3 p-2 max-sm:h-[116px] max-sm:pt-3  justify-between max-sm:block max-sm:space-y-3"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.logo1}
                  alt=""
                  className="w-[40px] h-[40px] gap-0   mb-2 "
                />
                <p className="text-base font-normal leading-[19.2px] text-left top-8 max-sm:mb-2">
                  {item.title}
                </p>
              </div>
              <div className=" flex items-center gap-3">
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
      )}
    </div>
  );
};

export default Dao;
