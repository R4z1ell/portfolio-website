import React from 'react';

import { Background, Wrapper } from './style';

import ProjectCard from '../ProjectCard';
import { Title } from '../../shared/Title';

const Projects = () => {
  return (
    <section id="projects">
      <Background>
        <Wrapper>
          <Title width="249px">projects</Title>
          <div className="cards-container">
            <ProjectCard
              color="jetdeals"
              title="JetDeals"
              skillOne="react"
              skillTwo="node.js"
              skillThree="mongodb"
              image="/static/jetdeals.png"
            />
            <ProjectCard
              color="cinema"
              title="Nuxt-Cinema"
              skillOne="nuxt.js"
              skillTwo="sass"
              skillThree="api"
              image="/static/nuxt-cinema.png"
            />
            <ProjectCard
              color="sensation"
              title="Sensation"
              skillOne="html5"
              skillTwo="css3"
              skillThree="sass"
              image="/static/sensation.png"
            />
          </div>
        </Wrapper>
      </Background>
    </section>
  );
};

export default Projects;
