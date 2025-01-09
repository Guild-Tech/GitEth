const ExploreProjec = () => {
  return (
    <div className="relative  flex w-full ">
      <div className="absolute gap-2 inset-y-0 start-0  flex items-center  pointer-events-none ps-3  ">
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400 ml-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        type="text"
        placeholder="Search for Projects"
        className="w-full ml-3 pl-10 py-2 px-4 bg-[#0D0F1C] h-12 text-white placeholder-gray-400 rounded-[20px] border border-transparent focus:outline-none   from-[#E8D07A] to-[#5312D6] "
        alt=""
      />
    </div>
  );
};

export default ExploreProjec;
