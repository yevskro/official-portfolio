import React from 'react';
import Project from './Project'
import styled from 'styled-components';

const Projects = (props) => <Container>
  <Project title='Nautilus' 
    caption='An interactive D3 visualizing tool that dynamically renders essential Docker Compose properties onto an Electron GUI, built to simplify the development environment for engineers.' 
    iconPath='/assets/icons/nautilus.png'
    imagePath='/assets/images/nautilus.png'/>
  <Project title='OpenSorceror' 
    caption='An organizer of public organizational github repos that are available to contributions. Developers can upload their own repos or save repos that they wish to contribute to.' 
    iconPath='/assets/icons/opensorce.png' 
    imagePath='/assets/images/opensorce.png'/>
  <Project title='Schemu' 
    caption='Schemu is an interactive tool used by teams of developers to collaboratively design PostgresQL database schemas. A secure URL is used for teammate to interact on the project in real-time.' 
    iconPath='/assets/icons/schemu.jpeg' 
    imagePath='/assets/images/schemu.png'/>
  <Project title='HangmanX' 
    caption='A multiplayer hangman built on the concept of chatroulette. no need to create an account as soon as you load up the page you are in a game room with strangers from anywhere!' 
    iconPath='/assets/icons/hangmanx.png'
    imagePath='/assets/images/hangmanx.png'/>
</Container>

const Container = styled.section`
  background-color: RGB(255,255,255);
`;
export default Projects;