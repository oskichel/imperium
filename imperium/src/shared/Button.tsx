import React from 'react';
import styled from 'styled-components';

export type ButtonProps = {
  color: string;
  hover: string;
  isSlider: boolean;
  isTurnedRight: boolean;
  isArrow?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  icon: React.ReactElement;
};

type StyleProps = {
  color: string;
  hover: string;
  isTurned: boolean;
  isBigSize: boolean;
}

const StyledButton = styled.button<StyleProps>`
  width: ${({isBigSize}) => isBigSize ? '78px' : '64px'};
  height: ${({isBigSize}) => isBigSize ? '58px' : '50px'};
  background: transparent;
  border: ${({color}) => `1px solid ${color}`};
  border-radius: 0px 30px 30px 0px;
  transform: ${({isTurned}) => isTurned ? 'none' : 'rotate(180deg)'};
  cursor: pointer;
  &:hover {
    border: 1px solid #BCBCBC;
  }
`;

export const Button = ({isSlider, isTurnedRight, isArrow = false, onClick, icon, color, hover}: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} isTurned={isTurnedRight} isBigSize={isSlider} color={color} hover={hover}>
      {isArrow ? icon : (<div style={{transform: 'rotate(180deg)'}} >{icon}</div>)}
    </StyledButton>
  );
};
