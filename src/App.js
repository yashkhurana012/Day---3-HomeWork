import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import style from './style.css'
import CarouselPage from './Carousel';
import HeroSection from './Components/HeroSection';
import Details from './Components/Details';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
    <Header />
    <Navbar />
    <CarouselPage />
    <HeroSection />
    <Details />
    <Footer />
    </div>
  );
}

export default App;
