import './App.css';
import BenefitsSlider from './Components/BenefitsSlider';
import Header from "./Components/Header";
import HomepageHero from "./Components/HomePageHero";
import HomepageSection2 from './Components/HomepageSection2';
import RegistrationSection from './Components/RegistrationSection';
import GainsSection from './Components/GainsSection';
import TestimonialsSection from './Components/TestimonialsSection';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HomepageHero />
      <HomepageSection2/>
      <BenefitsSlider/>
      <GainsSection/>
      <RegistrationSection/>
      <TestimonialsSection/>
      <Footer/>
    </div>
  );
}

export default App;
