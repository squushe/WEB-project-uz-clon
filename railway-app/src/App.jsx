import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/Booking";

function App() {
  return (
    <BrowserRouter>
      <header className="header">
        <h2>Укрзалізниця (Клон)</h2>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking/:trainId" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
