import React from 'react';
import styled from 'styled-components';

const Window = (props) => <StyledWindow>
    <Bar><RedCircle/><OrangeCircle/><GreenCircle/></Bar>
    <Image src={props.imagePath}></Image>
</StyledWindow>

const Image = styled.img`
  height: 550px;
  width: 750px;
  opacity: 1;
`;

const StyledWindow = styled.div`
  width: 750px;
  height: 550px;
  border-color: RGB(214,214,214);
  box-shadow: 0 4px 8px 0 RGBA(0, 0, 0, 0.08), 0 6px 20px 0 RGBA(0, 0, 0, 0.08);
  background-color: RGBA(0, 0, 255, 0.07);
  border-radius: 10px 10px 10px 10px;
  overflow: hidden;
`;

const Bar = styled.div`
  opacity: 0.55;
  height: 30px;
  padding-left: 15px;
  display: flex;
  align-items: center;
`;

const Circle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
  margin-left: 5px;
`;

const GreenCircle = styled(Circle)`
  background-color: rgba(0,255,0, 0.55);
`;

const OrangeCircle = styled(Circle)`
  background-color: rgba(255,200,0, 0.55);
`;
const RedCircle = styled(Circle)`
  background-color: rgba(255,0,0, 0.55);
`;

export default Window;