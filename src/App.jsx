import "./App.css";
import CreateAgentSection from "./components/CreateAgentSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NumberSection from "./components/NumberSection";
import RoadMap from "./components/RoadMap";
import TravelSection from "./components/TravelSection";

function App() {
  return (
    <>
      <HeroSection />
      <NumberSection />
      <TravelSection />
      <CreateAgentSection/>
      <RoadMap/>
      <Footer/>
    </>
  );
}

export default App;
