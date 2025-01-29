// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components//Navbar";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import SignUp from "./components/SignUp";
import BookCatalog from "./components/BookCatalog";
import Footer from "./components//Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/catalog" element={<BookCatalog />} />
        <Route path="/book-catalog" element={<BookCatalog />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
