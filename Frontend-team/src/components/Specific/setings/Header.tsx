import fram from "../../../assets/images/Frame (23).png";

const Header = () => {
  return (
    <div className="mt-20 bg-white bg-opacity-5 w-full p-5 gap-4 rounded-[24px] container mx-auto">
      <div className="flex gap-3">
        <img src={fram} alt="" />
        <p className="text-[18px]"> Settings</p>
      </div>
      <p className="text-[#B3B8DB]">
        Manage your account settings, preferences, and integrations in one place
        to customize your experience.
      </p>
    </div>
  );
};

export default Header;
