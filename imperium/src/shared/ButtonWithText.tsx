import React from 'react';
import styled from 'styled-components';
import ArrowIcon from './icons/ArrowIcon';

export type ButtonWithTextProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
};

const Button = styled.button`
  width: 207px;
  height: 50px;
  margin: 0;
  padding: 15px 24px;
  background: transparent;
  border: 1px solid #333333;
  border-radius: 0px 30px 30px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  &:hover {
    border: 1px solid #F64F00;
    color: #F64F00;
  }
`;


export const ButtonWithText = ({ onClick, text }: ButtonWithTextProps) => {
  return (
    <Button onClick={onClick}>
      <span>{text}</span>
      <ArrowIcon />
    </Button> 
  );
};
