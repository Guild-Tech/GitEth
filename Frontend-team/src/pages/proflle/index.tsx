import Profileoverview from "@/components/Specific/profile/Profileoverview";
import Profilej from "../../components/Specific/profile/Profilej";
import Contribute from "@/components/Specific/profile/Contribute";

const Profile = () => {
  return (
    <div className=" min-h-screen p-5 container   mx-auto max-sm:block">
      <div className="flex gap-6 ">
        <div className=" gap-4 max-sm:gap-0">
          <Profilej />
          <div className="sm:hidden">
            <Profileoverview />
          </div>
          <Contribute />
        </div>
        <div className="max-sm:hidden">
          <Profileoverview />
        </div>
      </div>
    </div>
  );
};

export default Profile;
