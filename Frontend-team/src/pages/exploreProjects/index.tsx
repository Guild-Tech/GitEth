import Pros from "../../components/Specific/projectOverview/Pros";

import Card from "../../components/Specific/projectOverview/Card";
import Open from "../../components/Specific/projectOverview/Open";

const Sidebar = () => {
  return (
    <section className=" container mx-auto min-h-screen  relative     max-sm:p-5  mt-24">
      <div className=" min-h-[100vh] relative z-10 sm:flex lg:flex  gap-6">
        <Pros />
        <Card />
      </div>
      <Open />
    </section>
  );
};

export default Sidebar;
