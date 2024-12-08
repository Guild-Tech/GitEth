import { Outlet } from "react-router-dom"
// import LandingPage from "../landingPage"
import Navigation from "@/components/Layout/Navbar"
import Footer from "@/components/Layout/Footer"

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
