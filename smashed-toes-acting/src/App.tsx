import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="flex flex-col min-h-screen min-w-screen bg-black">
      <Header />
      <main className="flex-grow p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
