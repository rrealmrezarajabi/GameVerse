import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-800 flex flex-col">
      <NavBar />

      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default MainLayout;
