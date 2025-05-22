import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SolutionPage from "./pages/SolutionPage";
import Navbar from "./components/General/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/solution" element={<SolutionPage />} />
      </Routes>
    </>
  );
}

export default App
