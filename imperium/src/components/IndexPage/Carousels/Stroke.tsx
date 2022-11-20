import { useEffect, useState } from 'react';
import styled from 'styled-components';
import st from './Carousels.module.css';

const blue = [
  'Клюшки для маленьких чемпионов', 
  'Уникальная клюшка с твоим именем', 
  'Клюшки для маленьких чемпионов', 
  'Уникальная клюшка с твоим именем',
];
const white = ['Клюшки', 'Одежда', 'Аксессуары', 'Клюшки', 'Одежда', 'Аксессуары'];

type StyleProps = {
  offset: number;
}

const StyledItems = styled.div<StyleProps>`
  display: flex;
  justify-content: space-between;
  transform: ${({offset}) => `translateX(${offset}px)`};
  transition: transform 4s;
`;

export const Stroke = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (offset > 1700) {
        setOffset(0);
      } else setOffset(offset + 100);
    }, 4000);
    return () => clearInterval(interval);
  }, [offset]);
  
  return (
    <div className={st.stroke}>
      <div className={st.stroke_white}>
        <StyledItems offset={offset}>
          {white.map((item) => (
            <span>{item}</span>
          ))}
        </StyledItems>
      </div>
      <div className={st.stroke_blue}>
        <StyledItems offset={offset}>
          {blue.map((item) => (
            <span>{item}</span>
          ))}
        </StyledItems>
      </div>
    </div>
  );
};