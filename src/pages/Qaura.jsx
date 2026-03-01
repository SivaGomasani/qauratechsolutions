import '../App.css';
import '../static/styles.css'
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Home from '../components/Home';
import Projects from '../components/Projects';
import Service from '../components/Service';
import StarEffect from '../components/StarEffect';
import Testimonials from '../components/Testimonials';

function Qaura() {
  return (
    <div className="App">
      <div className="galaxy-glow glow-purple"></div>
      <div className="galaxy-glow glow-blue"></div>

      <StarEffect />
     <Header />
     <Home />
     <About />
     <Service />
     <Projects />
     <Testimonials />
     <Contact />
     <Footer />
     
    </div>
  );
}

export default Qaura;
