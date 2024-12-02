import Pros from "./component/Pros";

import Card from "./component/Card";
import Open from "./component/Open";

const Sidebar = () => {
  return (
    <div className="bg-[#101323] min-h-screen  relative  z-20   p-5 ">
      <div className=" min-h-[100vh] relative z-10 sm:flex lg:flex  gap-6 ">
        <Pros />
        <Card />
      </div>
      <Open />
    </div>
  );
};

export default Sidebar;
