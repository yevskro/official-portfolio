import React from 'react';
import styled from 'styled-components';

const Intro = () => <Container>
  <Hi>hi...</Hi>
  <FlashName>
    <Name>Yevgeniy Skroznikov</Name>
    <FlashJob>
      <JobDescription>
        <JobTitle>Software Engineer</JobTitle>
      </JobDescription>
      <FlashSkills>
        <FlashReactSkill/>
        <FlashReduxSkill/>
        <FlashExpressSkill/>
        <FlashNodeSkill/>
        <FlashDbSkill/>
        <FlashMessage>
          <Message></Message>
          <FlashEmpty/>
        </FlashMessage>
      </FlashSkills>
    </FlashJob>
  </FlashName>
</Container>

const Flash = styled.section`
  height: 100%;
  overflow: hidden;
`;

const FlashEmpty = styled(Flash)``;
const FlashMessage = styled(Flash)``;
const FlashSkills = styled(Flash)``;
const FlashDbSkill = styled.figure``;
const Skill = styled.figcaption``;
const FlashNodeSkill = styled.figure``;
const FlashExpressSkill = styled.figure``;
const FlashReduxSkill = styled.figure``;
const FlashReactSkill = styled.figure``;
const FlashJob = styled(Flash)``;
const Message = styled.span``;
const JobDescription = styled.span``;
const JobTitle = styled.span``;
const Name = styled.span``;
const Hi = styled.span``;
const FlashName = styled(Flash)``;

const Container = styled.section`
  display: block;
  height: 590px;
  width: 860px;
  margin-left: 23%;
  margin-top: 80px;
`;

export default Intro;