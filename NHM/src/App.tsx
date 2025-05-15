import {Routes, Route } from 'react-router-dom';
import { Discover } from './pages/Discover';
import { Exhibitions } from './pages/Exhibitions';
import { ExhibitionDetails } from './pages/ExhibitionDetails';
import { Map } from './pages/Map';
import { Schedule } from './pages/Schedule';
import { Navbar } from './components/Navbar';
export function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Discover />} />
        <Route path="/exhibitions" element={<Exhibitions />} />
        <Route path="/exhibitions/:id" element={<ExhibitionDetails />} />
        <Route path="/map" element={<Map/>} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </>
  );
}
