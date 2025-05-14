import {Routes, Route } from 'react-router-dom';
import Discover from './pages/Discover';
import Exhibitions from './pages/Exhibitions';
import Map from './pages/Map';
import Schedule from './pages/Schedule';
import ExhibitionDetails from './pages/ExhibitionDetails';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Discover />} />
        <Route path="/exhibitions" element={<Exhibitions />} />
        <Route path="/exhibitions/:id" element={<ExhibitionDetails />} />
        <Route path="/map" element={<Map />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </>
  );
}

export default App;
