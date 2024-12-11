import Pros from "../../components/Specific/projectOverview/Pros";

import Card from "../../components/Specific/projectOverview/Card";
import Open from "../../components/Specific/projectOverview/Open";
import Carditem2 from "@/components/Specific/projectOverview/Carditem2";

const Sidebar = () => {
  return (
    <section className=" container mx-auto    relative  z-20   max-sm:p-5 w-full ">
      <div className=" min-h-[100vh] relative z-10 sm:flex lg:flex  gap-6 ">
        <Pros />
        <Card />
      </div>
      <Open />
    </section>
  );
};

export default Sidebar;
