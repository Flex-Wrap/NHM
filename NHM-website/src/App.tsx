import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SolutionPage from "./pages/SolutionPage";
import Navbar from "./components/General/Navbar";
import Footer from "./components/General/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/solution" element={<SolutionPage />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App
