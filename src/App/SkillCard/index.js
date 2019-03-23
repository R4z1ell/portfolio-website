import React from 'react';
import SVG from 'react-inlinesvg';

import { CardWrapper } from './style';

const SkillCard = props => {
  return (
    <CardWrapper level={props.level} skillName={props.skillName}>
      <ul>
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li>
          <SVG src={props.svgPath} className={props.cssClass} />
        </li>
      </ul>
    </CardWrapper>
  );
};

export default SkillCard;
