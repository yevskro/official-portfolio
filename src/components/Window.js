import React from 'react';
import styled from 'styled-components';

const Window = () => <StyledWindow>

</StyledWindow>

const StyledWindow = styled.div`
    width: 850px;
    height: 550px;
    border-color: RGB(214,214,214);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08), 0 6px 20px 0 rgba(0, 0, 0, 0.08);
    opacity: 0.55;
    border-radius: 10px 10px 10px 10px;
    overflow: hidden;
`;
export default Window;