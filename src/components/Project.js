import React from 'react';
import styled from 'styled-components';
import Window from './Window';

const Project = (props) => <Container>
  <StyledFigure>
    <Logo src={process.env.PUBLIC_URL + '/assets/icons/nautilus.png'}/>
    <Header>Nautilus</Header>
    <Caption>
      An interactive D3 visualizing tool that 
      dynamically renders essential Docker Compose 
      properties onto an Electron GUI, built to 
      simplify the development environment for engineers.
    </Caption>
    <Window/>
  </StyledFigure>
</Container>

const Logo = styled.img`
  margin-top: 80px;
`;
const Header = styled.h1`
  font-size: 2em;
`;
const Caption = styled.figcaption`
  font-family: 'Source Code Pro', monospace;
  margin-bottom: 3em;
  display: inline-block;
  width: 700px;
  color: RGB(117,133,143);
`;

const StyledFigure = styled.figure`
  margin-block-start: 0;
`;

const Container = styled.div`
  margin-left: 23.1%;
  border-left: 1px solid RGB(227,231,235);
  padding-bottom: 2em;
`

export default Project;