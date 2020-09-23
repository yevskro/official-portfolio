import React from 'react';
import styled from 'styled-components';

const Header = () => <Container>
    <PrimaryButton href="https://github.com/yevskro">Github</PrimaryButton>
    <SecondaryButton href="mailto:yevskro@gmail.com?Subject=Hello Yevgeniy">Hire Me</SecondaryButton>
</Container>;

const Container = styled.header`
  display: flex;
  justify-content: flex-end;
  padding-right: 8%;
  padding-left: 8%;
`;

const Button = styled.a`
  display: flex;
  width: 143px;
  height: 53px;
  justify-content: center;
  align-items: center;
  border: 1px solid RGB(50,54,58);
  border-radius: 2px;
  font-size: 1em;
  margin-top: 1%;
  margin-left: 20px;
  margin-right: 20px;
  cursor: pointer;
  background-color: RGB(39,43,46);
`;

const PrimaryButton = styled(Button)`
    color: RGB(234,191,16);
`;

const SecondaryButton = styled(Button)`
    color: RGB(255,255,255);
`;

export default Header;