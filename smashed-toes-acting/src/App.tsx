import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Film from "./pages/Film";
import Theater from "./pages/Theater";

function App() {
  return (
    <div className="flex flex-col min-h-screen min-w-screen bg-black">
      <Header />
      <main className="flex-grow p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/film" element={<Film />} />
          <Route path="/theater" element={<Theater />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
