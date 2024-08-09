
import './App.css';
import './responsive.css'
import About from './component/About/About';
import Banner from './component/Banner/Banner';
import Header from './component/Header/Header';
import Services from './component/Services/Services';
import Track from './component/Track/Track';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';

function App() {
  return (
   <>
   <Header />
   <Banner />
   <Services />
   <About />
   <Track />
   <Contact />
   <Footer />
      </>
  );
}

export default App;
