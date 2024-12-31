import BenefitsSlider from '../Components/BenefitsSlider';
import HomepageHero from "../Components/HomePageHero";
import EventSnapshot from "../Components/EventSnapshot";
import RegistrationSection from '../Components/RegistrationSection';
import TestimonialsSection from '../Components/TestimonialsSection';
import Footer from '../Components/Footer';
import { useRef } from 'react';
import AboutVong from '../Components/AboutVong';
import AboutSS4 from '../Components/AboutSS4';

function HomePage() {
  const registrationRef = useRef(null);
  return (
    <div className="min-h-screen">
      <HomepageHero registrationRef={registrationRef} />
      <AboutVong registrationRef={registrationRef}/>
      <AboutSS4 registrationRef={registrationRef}/>
      <BenefitsSlider/>
      <EventSnapshot registrationRef={registrationRef}/>
      <TestimonialsSection/>
      <div ref={registrationRef}> 
      <RegistrationSection  />
      </div>
      <Footer/>
    </div>
  );
}

export default HomePage;
