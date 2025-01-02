import Toggle from "./Toggle";

const Task = () => {
  return (
    <div>
      <div className="w-full bg-[#101323] rounded-[20px] p-5 space-y-5">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-[16px]">Task Assignments</p>
            <p className="text-[14px] text-[#B3B8DB]">
              Stay informed on new tasks assigned to you.
            </p>
          </div>
          <Toggle />
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-[16px]">New Projects</p>
            <p className="text-[14px] text-[#B3B8DB]">
              Get alerted on new projects available.
            </p>
          </div>
          <Toggle />
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-[16px]">Reward Updates</p>
            <p className="text-[14px] text-[#B3B8DB]">
              Get updates on when they’re ready to pay you.
            </p>
          </div>
          <Toggle />
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-[16px]">Community/Forum Activity</p>
            <p className="text-[14px] text-[#B3B8DB]">
              Get updates on activity on the community.
            </p>
          </div>
          <Toggle />
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-[16px]">Application Status Updates</p>
            <p className="text-[14px] text-[#B3B8DB]">
              Be informed on your application status.
            </p>
          </div>
          <Toggle />
        </div>
      </div>
    </div>
  );
};

export default Task;
