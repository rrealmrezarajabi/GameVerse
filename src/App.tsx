import { Route, Routes } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";
import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import GameDetail from "./pages/GameDetail";
import About from "./pages/About";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route element={<MainLayout />}>
        <Route path="/games/:id" element={<GameDetail />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default App;
