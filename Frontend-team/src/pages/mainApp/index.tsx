import { Outlet } from "react-router-dom";

import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";

const MainApp = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainApp;
