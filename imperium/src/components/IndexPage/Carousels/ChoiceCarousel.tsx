import { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../../shared/Button';
import ArrowIcon from '../../../shared/icons/ArrowIcon';
import { Card } from './Card';
import st from './Carousels.module.css';
import { Stroke } from './Stroke';

export type ChoiceCarouselProps = {
  sticksData: {
    id: number;
    src: string;
    name: string;
    price: string;
  }[];
}

type StyleProps = {
  spacing: number;
  offset: number;
}

const StyledCarousel = styled.div<StyleProps>`
  width: 1218px;
  padding-top: 40px;
  display: flex;
  flex-wrap: nowrap;
  column-gap: ${({spacing}) => `${spacing}px`};
  transform: ${({offset}) => `translateX(${offset}px)`};
  transition: transform 0.5s;
`;


const CARD_WIDTH = 282;
const SLIDER_SPACING = 30;

export const ChoiceCarousel = ({sticksData}: ChoiceCarouselProps) => {
  const pages = sticksData.length;
  const pageStep = CARD_WIDTH + SLIDER_SPACING;
  const [offset, setOffset] = useState(0);

  const handlePrev = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + pageStep;
      return Math.min(newOffset, 0);
    });
  };

  const handleNext = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - pageStep;
      const maxOffset = -(pageStep * (pages - 1));
      return Math.max(newOffset, maxOffset);
    });
  };


  return (
    <div className={st.choiceCarousel}>
      <div className={st.choiceCarousel_containter}>
        <div className={st.choiseCarousel_header}>
          <h1>Выбор наших клиентов</h1>
          <div>
            <Button 
              isSlider={true} 
              isTurnedRight={false} 
              onClick={handlePrev} 
              icon={<ArrowIcon />} 
              isArrow={true} 
              color={'#7D7D7D'}
              hover={'#BCBCBC'}
            />
            <Button 
              isSlider={true} 
              isTurnedRight={true} 
              onClick={handleNext} 
              icon={<ArrowIcon />} 
              isArrow={true} 
              color={'#7D7D7D'}
              hover={'#BCBCBC'}
            />
          </div>
        </div>
        <div className={st.choiceCarousel_wrap}>
          <StyledCarousel offset={offset} spacing={SLIDER_SPACING}>
            {sticksData.map(item => (
              <Card key={item.id} id={item.id} src={item.src} name={item.name} info={item.price} isStickCard={true} />
            ))}
          </StyledCarousel>
        </div>
      </div>
      <Stroke />
    </div>
    
  );
};
