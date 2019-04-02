import React from 'react';
import SVG from 'react-inlinesvg';

import { FooterStyle, Wrapper, Copyright, Social } from './style';

const Footer = () => {
  return (
    <FooterStyle>
      <Wrapper>
        <div>
          <Social
            left="26px"
            width="49%"
            marginTop="7px"
            marginLeft="9px"
            href="https://www.linkedin.com/in/pietro-c-881157146/"
            target="_blank"
          >
            <SVG src="/static/linkedin.svg" />
          </Social>
          <Social
            left="92px"
            width="56%"
            marginTop="8px"
            marginLeft="8px"
            href="https://twitter.com/BloodRaz1el"
            target="_blank"
          >
            <SVG src="/static/twitter.svg" />
          </Social>
          <Social
            left="158px"
            width="60%"
            marginTop="5px"
            marginLeft="8px"
            href="https://codepen.io/R4z1ell/"
            target="_blank"
          >
            <SVG src="/static/codepen.svg" className="codepen" />
          </Social>
        </div>
        <Copyright>
          © 2019 - <span>Cascione Pietro</span> - Italy
        </Copyright>
      </Wrapper>
    </FooterStyle>
  );
};

export default Footer;
