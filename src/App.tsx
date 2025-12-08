import { Route, Routes } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";
import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import GameDetail from "./pages/GameDetail";
import About from "./pages/About";
import ContactForm from "./pages/Contact";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route element={<MainLayout />}>
        <Route path="/games/:id" element={<GameDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactForm />} />
      </Route>
    </Routes>
  );
};

export default App;
