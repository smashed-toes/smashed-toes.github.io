import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen min-w-screen">
      <Header />
      <main className="flex-grow p-6">{/* Main content goes here */}</main>
      <Footer />
    </div>
  );
}

export default App;
