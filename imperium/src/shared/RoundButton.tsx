import styled from 'styled-components';

export type RoundButtonProps = {
  text: string;
  background: string;
  color: string;
  borderColor: string;
  isRotate?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean;
}

type StyleProps = {
  background: string;
  color: string;
  borderColor: string;
  isRotate?: boolean;
}

const StyledButton = styled.button<StyleProps>`
  width: 150px;
  height: 150px;
  background: ${({background}) => `${background}`};
  border: ${({borderColor}) => `1px solid ${borderColor}`};
  color: ${({color}) => `${color}`};
  border-radius: 50%;
  transform: ${({isRotate}) => isRotate ? 'rotate(15deg)' : 'none'};
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  font-feature-settings: 'pnum' on, 'lnum' on;
  &:hover {
    background: ${({borderColor}) => `${borderColor}`};
    color: #333333;
  }
`;

export const RoundButton = ({
  text, background, color, borderColor, isRotate=false, onClick, isDisabled}: RoundButtonProps) => {
  return (
    <StyledButton 
      onClick={onClick} 
      background={background}
      color={color}
      borderColor={borderColor} 
      isRotate={isRotate}
      disabled={isDisabled}
    >
      {text}
    </StyledButton>
  );
};
