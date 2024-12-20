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
        <div className="space-y-3 py-8  p-4">
          {data.slice(0, 1).map((item1) => (
            <div
              key={item1.id}
              className="w-full max-sm:w-full h-fit pt-4 gap-4 rounded-[16px] border flex flex-wrap max-sm:block max-sm:p-6"
            >
              <img
                src={item1.logo}
                alt="Logo"
                className="w-10 h-10 gap-0 rounded-[10px] border mb-3 ml-2 max-sm:w-[40px] max-sm:h-[40px]"
              />

              <div className="text-base font-normal leading-[19.2px] text-left top-8 max-sm:text-[16px]">
                {item1.title}

                <div className="w-[492px] bg-gray-200 rounded h-1 dark:bg-black mt-4 max-sm:hidden">
                  <div
                    className="bg-gray-100 h-1 rounded"
                    style={{
                      width: `${
                        item1.progress?.completed && item1.progress?.total
                          ? (item1.progress.completed / item1.progress.total) *
                            100
                          : 0
                      }%`,
                    }}
                  ></div>
                </div>
              </div>
              <div className="space-x-4 ml-auto mb-1 max-sm:ml-16 max-sm:mb-0 max-sm:gap-2">
                <div className="text-gray-400 text-sm p-2">
                  <span className="flex gap-2">
                    <img
                      src={item1.icons?.[0]?.src}
                      alt={item1.icons?.[0]?.alt || "Default Alt Text"}
                    />
                    Due by {item1.dueDate}
                  </span>
                  <span>{`${item1.progress?.completed || 0}/${
                    item1.progress?.total || 0
                  } Tasks Completed`}</span>
                </div>
              </div>
            </div>
          ))}
          {data.slice(0, 2).map((item) => (
            <div
              key={item.id}
              className=" h-auto pt-4 gap-4 rounded-[16px] border flex py-3 p-2 max-sm:h-[126px] max-sm:pt-3  "
            >
              <img
                src={item.logo1}
                alt=""
                className="w-[40px] h-[40px] gap-0   mb-2 "
              />
              <div className="flex gap-24 mt-2 max-sm:block max-sm:gap-2">
                <p className="text-base font-normal leading-[19.2px] text-left top-8">
                  {item.title}
                </p>
                <div className="flex space-x-2     ml-40 max-sm:ml-0">
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
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dao;
