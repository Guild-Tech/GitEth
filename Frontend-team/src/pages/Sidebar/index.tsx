import Pro from "./component/Pro";
import Card from "./component/Card";

const Sidebar = () => {
  return (
    <div>
      <div className="  sm:flex lg:flex  gap-6 ">
        <Pro />
        <Card />
      </div>
    </div>
  );
};

export default Sidebar;
