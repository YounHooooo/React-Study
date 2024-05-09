import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductAll from "./pages/ProductAll";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  useEffect(() => {
    console.log("aaa", authenticate);
  }, [authenticate]);
  return (
    <div className="wrapper">
      <Navbar />
      <body>
        <Routes>
          <Route path="/" element={<ProductAll />} />
          <Route
            path="/login"
            element={<Login setAuthenticate={setAuthenticate} />}
          />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </body>
      <Footer />
    </div>
  );
}

export default App;
