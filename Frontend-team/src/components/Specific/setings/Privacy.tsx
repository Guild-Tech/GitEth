import Checkbox from "./Checkbox";
import Toggle from "./Toggle";

const Privacy = () => {
  return (
    <div>
      <div className="bg-white bg-opacity-5 w-full p-5 gap-4 space-y-2 rounded-[24px] container mx-auto">
        <div className="space-y-2">
          <p className="text-[18px]">Privacy & Security</p>
          <p className="text-[#B3B8DB] text-[16px]">
            Customise your notification settings to stay informed about
            important updates.
          </p>
        </div>
        <div className="bg-[#101323] w-full rounded-[20px] p-5 space-y-7">
          <div className="flex justify-between">
            <div>
              <p className="text-[16px]">Profile Visibility</p>
              <p className="text-[14px] text-[#B3B8DB]">
                Choose whether you want to be visible online
              </p>
            </div>
            <div className="flex gap-2">
              <Checkbox /> Public
              <Checkbox /> Private
              <Checkbox /> Limited
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <p className="text-[16px]">Display Github Contributions</p>
              <p className="text-[14px] text-[#B3B8DB]">
                Get alerted on new projects available.
              </p>
            </div>
            <div className="flex gap-2">
              <Checkbox />
              Yes
              <Checkbox /> No
            </div>
          </div>
        </div>
        <div className="bg-[#101323] w-full rounded-[20px] p-5 space-y-7">
          <div className="flex justify-between">
            <div>
              <p className="text-[16px]">Consent for Data Sharing</p>
              <p className="text-[14px] text-[#B3B8DB]">
                Choose whether you want to be visible online
              </p>
            </div>
            <Toggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
