import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => <FooterContainer>
  <PrimaryButton href="mailto:yevskro@gmail.com?Subject=Hello Yevgeniy">Hire Me</PrimaryButton>
  <Email>yevskro@gmail.com</Email>
  <Icons>
    <IconLink href="https://github.com/yevskro">
      <FontAwesomeIcon icon={faGithub} color='white' size='lg'/>
    </IconLink>
    <IconLink href="https://www.linkedin.com/in/yevgeniyskroznikov/">
      <FontAwesomeIcon icon={faLinkedin} color='white' size='lg'/>
    </IconLink> 
  </Icons>
</FooterContainer>;

const IconLink = styled.a`
  margin-left: 17px;
  margin-right: 17px;
`;

const FooterContainer = styled.section`
  display: flex;
  height: 400px;
  flex-direction: column;
`;

const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid RGB(50,54,58);
  border-radius: 5px;
  height: 73px;
  width: 251px;
  font-size: 1.2em;
  font-weight: 900;
  cursor: pointer;
  align-self: center;
  margin-top: 81px;
  font-family: 'Space Mono', monospace;
`;

const PrimaryButton = styled(Button)`
    background-color: RGB(42, 214, 119);
    color: RGB(33,37,40);
`
const Icons = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 65px;
`;

const Email = styled.span`
    font-size: 1.2em;
    font-family: 'Space Mono', monospace;
    font-weight: 900;
    align-self: center;
    margin-top: 37px;
    color: RGB(104, 118, 127);
`
export default Footer;