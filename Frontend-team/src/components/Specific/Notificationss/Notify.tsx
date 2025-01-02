import notificationIcon from "../../../assets/icons/notificationIcon.svg";

const notifications = [
  {
    id: "1",
    title: "New application",
    desc: "Jomi-loju applied to Repo Test on Repo",
    type: "Test - Maintainer",
    date: "1 month ago",
  },
  {
    id: "2",
    title: "New application",
    desc: "Jomi-loju applied to Repo Test on Repo",
    type: "Test - Maintainer",
    date: "1 month ago",
  },
];
const Notify = ({ onClose }: any) => {
  return (
    <div>
      <div className="bg-white w-[400px] h-[249px] rounded-[26px] p-4 space-y-4 absolute right-10 top-20">
        <p className="text-[black] text-[24px] font-matter">Nofications</p>
        <hr className="mt-4 border-[#EAECF5]" />
        {notifications.map((notification: any) => (
          <div
            className="flex justify-between cursor-pointer"
            key={notification.id}
            onClick={onClose}
          >
            <div className="flex gap-2 ">
              <div className="bg-black rounded-full w-[40px] h-[40px] items-center flex justify-center border border-to-r from-[#E8D07A] to-[#5312D6] ">
                <img src={notificationIcon} alt="" />
              </div>
              <div>
                <p className="text-[black] font-matter">{notification.title}</p>
                <p className="text-[black] text-[12px] font-kern">
                  {notification.desc} <br />
                  {notification.type}
                </p>
              </div>
              <p className=" text-[#9DA4AE] text-[14px] ml-4">
                {notification.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notify;
