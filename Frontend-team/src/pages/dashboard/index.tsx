import CardItem from "../../components/Specific/dashboard/CardItem";

import DashboardComponent from "../../components/Specific/dashboard/Dashboard";

import Dashboard2 from "@/components/Specific/dashboard/Dashboard2";

export default function Dashboard() {
  return (
    <div className=" min-h-[100vh] relative z-30 flex flex-wrap  w-full container mx-auto gap-8 ">
      <div className=" justify-between items-center grid gap-6 md:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-2  h-fit mx-auto container mt-32 ">
        <DashboardComponent />
        <Dashboard2 />
      </div>

      <CardItem />
      {/* <Setup />
      <Setin /> */}
    </div>
  );
}
