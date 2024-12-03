import CardItem from "../../components/Specific/dashboard/CardItem";

import DashboardComponent from "../../components/Specific/dashboard/Dashboard";
import Setup from "../../components/Specific/dashboard/Setup";

export default function Dashboard() {
  return (
    <div className=" bg-[#101323] min-h-[100vh] relative z-30 flex flex-wrap">
      <DashboardComponent />
      <CardItem />
      <Setup />
    </div>
  );
}
