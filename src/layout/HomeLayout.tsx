import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
const HomeLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 flex flex-col">
      <NavBar />
      <div className="flex flex-col sm:flex-row flex-1 relative">
        <SideBar />
        <main className="flex-1 min-w-0 sm:ml-0">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
