import React from 'react';
import styled from 'styled-components';
import Window from './Window';

const Project = (props) => <Container>
  <figure>
    <Logo/>
    <Header>Project1</Header>
    <Caption>Durran</Caption>
    <Window/>
  </figure>
</Container>

const Logo = styled.img``;
const Header = styled.h1`
  font-size: 2em;
`;
const Caption = styled.figcaption`
  font-family: 'Source Code Pro', monospace;
  margin-bottom: 3em;
  display: inline-block;
  width: 700px;
`;

const Container = styled.div`
  margin-left: 23.1%;
  border-left: 1px solid RGB(227,231,235);
  padding-bottom: 2em;
`

export default Project;