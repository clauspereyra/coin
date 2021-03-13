import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import HeroSection from './components/HeroSection';
import InfoSection from './components/InfoSection';
import { homeObjOne } from './components/InfoSection/Data';
import { homeObjTwo } from './components/InfoSection/Data';
import { homeObjThree } from './components/InfoSection/Data';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';
import SlideHome from './components/SlideHome';
import Services from './components/Services';
import PayServices from './components/PayServices';
import LogosBox from './components/LogosBox';
import Testimonials from './components/Testimonials';
import Suscripcion from './components/Suscripcion';
import Footer from './components/Footer';

function App() {
  return (

    <div className="App">

      <Navbar />

      <SlideHome />

      <InfoSection {...homeObjOne} />
      <Services />
      <PayServices />
      <LogosBox /> 

      <Testimonials />

      <Suscripcion />

      <Footer />
      

    

      

    </div>
  );
}

export default App;


