import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home}  from "./pages/home";
import  Dashboard  from "./pages/dashboard";
import  Navbar  from "./components/navbar";
import { Footer } from "./components/footer";

function App() {
  return (
    <Router> {/* ← Must wrap everything */}
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 p-8 bg-gray-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

