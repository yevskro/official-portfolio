import React from 'react';
import Project from './Project'
import styled from 'styled-components';

const Projects = (props) => <Container>
  <Project/>
</Container>

const Container = styled.section`
  background-color: RGB(255,255,255);
`;
export default Projects;