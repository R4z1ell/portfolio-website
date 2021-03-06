import React from 'react';
import Slide from 'react-reveal/Slide';

import { Background, Wrapper, Flex, CardsWrapper } from './style';
import Skills from '../Skills';
import SkillCard from '../SkillCard';
import { Title } from '../../shared/Title';

const About = () => {
  return (
    <section id="about">
      <Background>
        <Wrapper>
          <Title>about</Title>
          <Flex>
            <Slide left ssrReveal={true}>
              <div className="about-wrapper">
                <img src="/static/portrait.png" alt="portrait" />
                <p>
                  Hello to you visitor and welcome to my personal site! Throught
                  my whole life i've always been driven towards the discovery of
                  new things with an innate and endless passion for everything
                  that involves technology. Ultimately my eager brought me in
                  the world of Software Development and since my very first line
                  of code i knew that this was my path.
                </p>
              </div>
            </Slide>
            <Slide right ssrReveal={true}>
              <div className="skills-wrapper">
                <Skills />
                <CardsWrapper>
                  <SkillCard
                    svgPath={'../../../static/html.svg'}
                    cssClass="html"
                    level={9}
                    skillName={'html'}
                  />
                  <SkillCard
                    svgPath={'../../../static/css.svg'}
                    cssClass="css"
                    level={9}
                    skillName={'css'}
                  />
                  <SkillCard
                    svgPath={'../../../static/js.svg'}
                    cssClass="js"
                    level={8}
                    skillName={'js'}
                  />
                  <SkillCard
                    svgPath={'../../../static/react.svg'}
                    cssClass="react"
                    level={8}
                    skillName={'react'}
                  />
                  <SkillCard
                    svgPath={'../../../static/node.svg'}
                    cssClass="node"
                    level={8}
                    skillName={'node'}
                  />
                </CardsWrapper>
              </div>
            </Slide>
          </Flex>
        </Wrapper>
      </Background>
    </section>
  );
};

export default About;
