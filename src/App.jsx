import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import WellcomeScreen from "./pages/WellcomeScreen";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./pages/Projects";

const RootLayout = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === "/";
  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<WellcomeScreen />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <RootLayout />
    </BrowserRouter>
  );
};

export default App;
