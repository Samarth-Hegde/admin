import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/homePage";
import ViewBookings from "./pages/viewBookingsPage/viewBookings";
import AddFlight from "./pages/addFlightPage/addFlight";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/add-flight" element={<AddFlight />}></Route>
        <Route path="/view-bookings/:id" element={<ViewBookings />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
