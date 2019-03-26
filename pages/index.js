import { Element } from 'react-scroll';

import Home from '../src/App/Home';
import About from '../src/App/About';
import Projects from '../src/App/Projects';
import Contact from '../src/App/Contact';
import Footer from '../src/App/Footer';

const Index = () => (
  <div>
    <Element name="Home">
      <Home />
    </Element>
    <Element name="About">
      <About />
    </Element>
    <Element name="Projects">
      <Projects />
    </Element>
    <Element name="Contact">
      <Contact />
    </Element>
    <Footer />
  </div>
);

export default Index;
