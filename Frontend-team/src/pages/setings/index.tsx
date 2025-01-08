import Application from "@/components/Specific/setings/Application";
import Header from "@/components/Specific/setings/Header";
import Integration from "@/components/Specific/setings/Integration";
import Notification from "@/components/Specific/setings/Notification";
import Privacy from "@/components/Specific/setings/Privacy";
import Reward from "@/components/Specific/setings/Reward";

const Menu = () => {
  return (
    <div className="p-12 max-sm:p-4 space-y-3">
      <Header />
      <Notification />
      <Privacy />
      <Integration />
      <Reward />
      <Application />
    </div>
  );
};

export default Menu;
