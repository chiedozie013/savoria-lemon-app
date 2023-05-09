import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
// import SmoothScroll from "./components/SmoothScroll";
import HomePage from "./components/home-page/HomePage";
import BookingPage from "./components/reservation-page/ReservationPage";
import MenuPage from "./components/menu/MenuPage";
import React from "react";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/Home-Page" element={<HomePage />} />
        <Route path="/Reservation-Page" element={<BookingPage />} />
        <Route path="/Menu-Page" element={<MenuPage />} />
      </Routes>
    </Router>
  );
}
export default App;
