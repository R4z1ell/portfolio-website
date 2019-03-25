import React from 'react';
import SVG from 'react-inlinesvg';

import { FooterStyle, Wrapper, Copyright, Social } from './style';

const Footer = () => {
  return (
    <FooterStyle>
      <Wrapper>
        <div>
          <Social left="26px" width="49%" marginTop="7px" marginLeft="9px">
            <SVG src="/static/linkedin.svg" />
          </Social>
          <Social left="92px" width="56%" marginTop="8px" marginLeft="8px">
            <SVG src="/static/twitter.svg" />
          </Social>
          <Social left="158px" width="60%" marginTop="5px" marginLeft="8px">
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
