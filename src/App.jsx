import { useEffect } from "react";
import Aos from "aos";
import "./App.css";
import { Header } from "./assets/components/header/Header";
import Footer from "./assets/components/footer/Footer";
import Hero from "./assets/UI/Hero";
import Additional from "./assets/UI/Additional";
import Portfolio from "./assets/UI/Portfolio";
import Background from "./assets/images/Background.png";
function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="relative">
      <img
        src={Background}
        alt="background"
        className="absolute inset-0 h-full object-cover"
      />
      <Header />
      <main>
        <Hero />
        <Additional />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}

export default App;
