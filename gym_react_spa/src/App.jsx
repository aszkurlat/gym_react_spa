import "./App.css";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import GymGalery from "./components/GymGalery/GymGalery.jsx";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Plans from "./components/Plans/Plans.jsx";
import Programs from "./components/Programs/Programs.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Programs />
      <GymGalery />
      <Plans />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
