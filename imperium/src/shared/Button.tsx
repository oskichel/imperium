import React from 'react';
import styled from 'styled-components';

export type ButtonProps = {
  isSlider: boolean;
  isTurnedRight: boolean;
  isArrow?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  icon: React.ReactElement;
};

type StyleProps = {
  isTurned: boolean;
  isBigSize: boolean;
}

const StyledButton = styled.button<StyleProps>`
  width: ${({isBigSize}) => isBigSize ? '78px' : '64px'};
  height: ${({isBigSize}) => isBigSize ? '58px' : '50px'};
  background: transparent;
  border: 1px solid #BCBCBC;
  border-radius: 0px 30px 30px 0px;
  transform: ${({isTurned}) => isTurned ? 'none' : 'rotate(180deg)'};
`;

export const Button = ({isSlider, isTurnedRight, isArrow = false, onClick, icon}: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} isTurned={isTurnedRight} isBigSize={isSlider}>
      {isArrow ? icon : (<div style={{transform: 'rotate(180deg)'}} >{icon}</div>)}
    </StyledButton>
  );
};
