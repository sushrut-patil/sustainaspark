import BenefitsSlider from '../Components/BenefitsSlider';
import HomepageHero from "../Components/HomePageHero";
import HomepageSection2 from '../Components/HomepageSection2';
import RegistrationSection from '../Components/RegistrationSection';
import GainsSection from '../Components/GainsSection';
import TestimonialsSection from '../Components/TestimonialsSection';
import Footer from '../Components/Footer';
import { useRef } from 'react';

function HomePage() {
  const registrationRef = useRef(null);
  return (
    <div className="min-h-screen">
      <HomepageHero registrationRef={registrationRef} />
      <HomepageSection2/>
      <BenefitsSlider/>
      <GainsSection/>
      <div ref={registrationRef}> 
      <RegistrationSection  />
      </div>
      <TestimonialsSection/>
      <Footer/>
    </div>
  );
}

export default HomePage;
