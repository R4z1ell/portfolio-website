import React from 'react';
import Bounce from 'react-reveal/Bounce';

import { Background, Wrapper } from './style';

import ProjectCard from '../ProjectCard';
import { Title } from '../../shared/Title';

const Projects = () => {
  return (
    <section id="projects">
      <Background>
        <Wrapper>
          <Title>projects</Title>
          <div className="cards-container">
            <Bounce left ssrReveal={true}>
              <ProjectCard
                color="jetdeals"
                title="JetDeals"
                skillOne="react"
                skillTwo="node.js"
                skillThree="mongodb"
                image="/static/jetdeals.png"
                marginRight="60px"
                path="https://github.com/R4z1ell/react-game-store"
              />
            </Bounce>
            <Bounce bottom ssrReveal={true}>
              <ProjectCard
                color="cinema"
                title="Nuxt-Cinema"
                skillOne="nuxt.js"
                skillTwo="sass"
                skillThree="api"
                image="/static/nuxt-cinema.png"
                marginRight="60px"
                path="https://github.com/R4z1ell/nuxt-cinema"
              />
            </Bounce>
            <Bounce right ssrReveal={true}>
              <ProjectCard
                color="sensation"
                title="Sensation"
                skillOne="html5"
                skillTwo="css3"
                skillThree="sass"
                image="/static/sensation.png"
                path="https://github.com/R4z1ell/Sensation"
              />
            </Bounce>
          </div>
        </Wrapper>
      </Background>
    </section>
  );
};

export default Projects;
