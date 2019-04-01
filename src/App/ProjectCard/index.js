import React from 'react';
import SVG from 'react-inlinesvg';

import { CardWrapper, Flex, Button } from './style';

const ProjectCard = props => {
  return (
    <CardWrapper
      color={props.color}
      image={props.image}
      marginRight={props.marginRight}
    >
      <Flex color={props.color} margin={props.color}>
        <h3>{props.title}</h3>
        <div className="tech-wrapper">
          <span>{props.skillOne}</span>
          <span>{props.skillTwo}</span>
          <span>{props.skillThree}</span>
        </div>
      </Flex>
      <div className="image" />
      <div className="btn-wrapper">
        <Button color={props.color} shadow={props.color}>
          <SVG src="/static/icon.svg" />
          website
        </Button>
        <Button
          source
          color={props.color}
          shadow={props.color}
          href={props.path}
          target="_blank"
        >
          <SVG src="/static/source.svg" />
          source
        </Button>
      </div>
    </CardWrapper>
  );
};

export default ProjectCard;
