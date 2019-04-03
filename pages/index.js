import { Element } from 'react-scroll';
import Head from 'next/head';

import Home from '../src/App/Home';
import About from '../src/App/About';
import Projects from '../src/App/Projects';
import Contact from '../src/App/Contact';
import Footer from '../src/App/Footer';

const Index = () => (
  <React.Fragment>
    <Head>
      <title>Cascione Pietro - Portfolio</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
      />
      <meta
        name="description"
        content="My name is Pietro Cascione and i'm a Full-Stack Web Developer and Freelancer from Italy. I have an endless passion for technology and i love to engage myself in solving hard problems and upgrading my skills."
      />
      <meta
        name="keywords"
        content="Cascione Pietro portfolio, Cascione Pietro developer, Cascione Pietro freelancig, Cascione Pietro programming"
      />
      <meta
        property="og:title"
        content="Cascione Pietro - Full-stack developer, programmer"
      />
      <meta property="og:locale" content="en_EU" />
      <meta property="og:url" content={'https://cascionepietro.com'} />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="My name is Pietro Cascione and i'm a Full-Stack Web Developer and Freelancer from Italy."
      />
      <link rel="icon" type="image/ico" href="/static/favicon.ico" />
    </Head>
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
  </React.Fragment>
);

export default Index;
