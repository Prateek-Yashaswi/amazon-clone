import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import MyOrders from "./pages/myOrders/MyOrders";
import Home from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myOrders" element={<MyOrders />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
