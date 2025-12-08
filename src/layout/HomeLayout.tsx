import NavBar from "../components/NavBar"
import SideBar from "../components/SideBar"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"
const HomeLayout = () => {
  return (
    <div className="min-h-screen bg-gray-800 flex flex-col">
        <NavBar/>
        <div className="flex flex-1">
            <SideBar/>
            <main className="flex-1">
                <Outlet/>
            </main>
        </div>
      <Footer/>
    </div>
  )
}

export default HomeLayout
