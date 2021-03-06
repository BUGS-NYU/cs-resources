import * as React from "react";
import styled from "styled-components";

import NetlifyLogo from "../images/svg/netlify.svg";

const Footer = () => (
  <FooterContainer>
    <FooterText>
      © 2021, Built with{" "}
      <span role="img" aria-label="Purple Heart">
        💜
      </span>{" "}
      by NYU-BUGS CLUB
    </FooterText>
    <a href="https://www.netlify.com">
      <NetlifyLogo alt="Deploys by Netlify" />
    </a>
  </FooterContainer>
);

const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 3rem;
  background: #222943;
  height: 5rem;
`;

const FooterText = styled.p`
  font-size: 0.8rem;
  color: white;
`;

export default Footer;
