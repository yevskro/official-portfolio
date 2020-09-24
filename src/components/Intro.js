import React from 'react';
import styled, { keyframes } from 'styled-components';

const Intro = () => <Container>
  <Hi>hi! I am...</Hi>
  <FlashName>
    <Name>Yevgeniy Skroznikov</Name>
    <FlashJob>
      <JobDescription>
        I am a <NeonText>Software Engineer</NeonText> with skills across the stack.
      </JobDescription>
      <FlashSkills>
        <Skills>
          <ReactSkill>React</ReactSkill>
          <ReduxSkill>Redux</ReduxSkill>
          <ExpressSkill>Express</ExpressSkill>
          <NodeSkill>Node</NodeSkill>
          <DbSkill>SQL/NoSQL</DbSkill>
        </Skills>
        <FlashMessage>
          <Message>I've worked with <NeonText>TypeScript</NeonText>, <NeonText>Test Driven Development</NeonText>, <NeonText>CI/CD</NeonText>, <NeonText>AWS</NeonText>, and the <NeonText>MVC</NeonText> architecture. I am the maintainer of <NeonText>Nautilus</NeonText> an <NeonText>open source</NeonText> product that visualizes and deploys <NeonText>docker-compose</NeonText> files within an <NeonText>Electron</NeonText> application.</Message>
          <FlashEmpty/>
        </FlashMessage>
      </FlashSkills>
    </FlashJob>
  </FlashName>
</Container>

const becomeVisible = keyframes`
    0%      { opacity: 0; }
    100%    { opacity: 1; }
}`;

const Flash = styled.section`
  display: block;
  overflow: hidden;
  height: 100%;
  margin-top: 25px;
  padding-left: 55px;
  border-left: 1px solid RGB(63,69,73);
  opacity: 0;
  animation: 0.5s ease-in 0s 1 ${becomeVisible} forwards;
`;

const FlashEmpty = styled(Flash)`
  animation-delay: 2.4s;
`;
const FlashMessage = styled(Flash)`
  animation-delay: 1.2s;
`;
const FlashSkills = styled(Flash)`
  animation-delay: 0.8s;
`;

const Skills = styled.ol`
  display: flex;
  padding: 0;
  justify-content: space-around;
  list-style: none;
`;

const Skill = styled.li`
    background-color: RGB(38, 43, 46);
    font-size: 0.85em;
    padding: 2% 2% 2% 2%;
    border-radius: 2px;
    width: 100px;
    height: 55px;
    text-align: center;
    vertical-align: center;
    line-height: 55px;
    color: RGB(224,238,246);
    font-size: 1.2em;
    opacity: 0;
    animation: 0.5s ease-in 0s 1 ${becomeVisible} forwards;
`;

const ReactSkill = styled(Skill)`
  animation-delay: 1.2s;
`;

const ReduxSkill = styled(Skill)`
  animation-delay: 1.4s;
`;

const ExpressSkill = styled(Skill)`
  animation-delay: 1.6s;
`;

const NodeSkill = styled(Skill)`
  animation-delay: 1.8s;
`;

const DbSkill = styled(Skill)`
  animation-delay: 2s;
`;

const FlashJob = styled(Flash)`
  animation-delay: 0.4s;
`;
const Message = styled.span`
  color: RGB(117,133,143);
  font-size: 1.1em;
  opacity: 0;
  animation: 0.5s ease-in 0s 1 ${becomeVisible} forwards;
  animation-delay: 2.4s;
`;
const JobDescription = styled.span`
  color: RGB(117,133,143);
  font-size: 1.1em;
  opacity: 0;
  animation: 0.5s ease-in 0s 1 ${becomeVisible} forwards;
  animation-delay: 0.8s;
`;

const NeonText = styled.span`
  color: RGB(80, 251,156);
  font-size: 1.1em
`
const Name = styled.span`
  color: RGB(224,238,246);
  font-size: 4em;
  opacity: 0;
  animation: 0.5s ease-in 0s 1 ${becomeVisible} forwards;
  animation-delay: 0.4s;
`;
const Hi = styled.span`
  color: RGB(224,238,246);
  font-size: 1.5em;
  opacity: 0;
  animation: 0.5s ease-in 0s 1 ${becomeVisible} forwards;
`;
const FlashName = styled(Flash)`
  animation: 0.5s ease-in 0s 1 ${becomeVisible} forwards;
`;

// full animation 0.5s, 0.15 delay for next container, and delay 10s for next message

const Container = styled.section`
  display: block;
  height: 560px;
  width: 860px;
  margin-left: 23.1%;
  margin-top: 80px;
  overflow: hidden;
`;

export default Intro;