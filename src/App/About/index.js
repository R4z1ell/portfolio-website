import React from 'react';

import { Background, Wrapper, Flex } from './style';
import Skills from '../Skills';
import SkillCard from '../SkillCard';

const About = () => {
  return (
    <section id="about">
      <Background>
        <Wrapper>
          <h1>about</h1>
          <Flex>
            <div className="about-wrapper">
              <img src="/static/portrait.png" alt="portrait" />
              <p>
                Hello to you visitor and welcome to my personal site! Throught
                my whole life i've always been driven towards the discovery of
                new things with an innate and endless passion for everything
                that involves technology. Ultimately my eager brought me in the
                world of Software Development and since my very first line of
                code i knew that this was my path.
              </p>
            </div>
            <div className="skills-wrapper">
              <Skills />
              <SkillCard svgPath={'../../../static/html.svg'} cssClass="html" />
              <SkillCard svgPath={'../../../static/css.svg'} cssClass="css" />
              <SkillCard svgPath={'../../../static/js.svg'} cssClass="js" />
              <SkillCard
                svgPath={'../../../static/react.svg'}
                cssClass="react"
              />
              <SkillCard svgPath={'../../../static/node.svg'} cssClass="node" />
            </div>
          </Flex>
        </Wrapper>
      </Background>
    </section>
  );
};

export default About;
