import React from 'react';
import Project from './Project'
import styled from 'styled-components';

const Projects = (props) => <Container>
  <Project title='Nautilus' caption='An interactive D3 visualizing tool that dynamically renders essential Docker Compose properties onto an Electron GUI, built to simplify the development environment for engineers.' iconPath='/assets/icons/nautilus.png'/>
  <Project title='OpenSorce' caption='' iconPath='/assets/icons/opensorce.png'/>
  <Project title='Schemu' caption='' iconPath='/assets/icons/schemu.jpeg'/>
  <Project title='HangmanX' caption='A multiplayer hangman built on the concept of chatroulette. no need to create an account as soon as you load up the page you are in a game room with strangers from anywhere!' iconPath='/assets/icons/hangmanx.png'/>
</Container>

const Container = styled.section`
  background-color: RGB(255,255,255);
`;
export default Projects;