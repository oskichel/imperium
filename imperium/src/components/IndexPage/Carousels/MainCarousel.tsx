import { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { addCaseDeclension } from '../../../utils/caseDeclension';
import FullLogo from '../../../shared/logo/FullLogo';
import { Light } from '../Light';
import { Button } from '../../../shared/Button';
import ArrowIcon from '../../../shared/icons/ArrowIcon';
import { RoundButton } from '../../../shared/RoundButton';
import { Card } from './Card';
import st from './Carousels.module.css';

export type MainCarouselProps = {
  cards: {
    id: number;
    src: string;
    name: string;
    info: string;
  }[];
};

type StyleProps = {
  spacing: number;
  offset: number;
}

const StyledCarousel = styled.div<StyleProps>`
  width: 992px;
  margin: 0 auto;
  display: flex;
  flex-wrap: nowrap;
  column-gap: ${({spacing}) => `${spacing}px`};
  transform: ${({offset}) => `translateX(${offset}px)`};
  transition: transform 0.5s;
`;

const CARD_WIDTH = 992;
const SLIDER_SPACING = 200;

export const MainCarousel = ({cards}: MainCarouselProps ) => {
  const pages = cards.length;
  const pageStep = CARD_WIDTH + SLIDER_SPACING;
  const [offset, setOffset] = useState(-pageStep * (Math.floor(pages / 2)));

  const handleLeft = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + pageStep;
      return Math.min(newOffset, 0);
    });
  };

  const handleRight = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - pageStep;
      const maxOffset = -(pageStep * (pages - 1));
      return Math.max(newOffset, maxOffset);
    });
  };

  return (
    <div className={st.mainCarousel_container}>
      <FullLogo />
      <Light
        width={674}
        height={634}
        color={'radial-gradient(50% 50% at 50% 50%, #F64F00 0%, rgba(246, 79, 0, 0) 100%)'} 
        blur={32}
        top={181}
        left={291}
      />
      <Light 
        width={878}
        height={645}
        color={'radial-gradient(50% 50% at 50% 50%, #0178F3 0%, rgba(1, 120, 243, 0) 100%)'} 
        blur={32}
        top={108}
        left={857}
      />
      <div className={st.mainCarousel_wrap}>
        <div className={st.mainCarousel_catalog}>
          <NavLink to={'/catalogt'}>
            <RoundButton 
              text={'В каталог'} 
              background={'#FFFFFF'} 
              color={'#333333'} 
              borderColor={'#FFFFFF'} 
              isRotate={true}
            />
          </NavLink>
        </div>
        <StyledCarousel offset={offset} spacing={SLIDER_SPACING} >
          {cards.map((item, index) => (
            <Card 
              key={index} 
              id={item.id}
              name={item.name} 
              src={item.src} 
              info={item.info} 
              genitiveName={addCaseDeclension(item.name)} 
            />
          ))}
        </StyledCarousel>
        <div className={st.mainCarousel_buttons}>
          {offset < 0 && (
            <div className={st.mainCarousel_left}>
              <Button
                isSlider={true} 
                isTurnedRight={false} 
                onClick={handleLeft} 
                icon={<ArrowIcon />} 
                isArrow={true} 
                color={'#7D7D7D'}
                hover={'#BCBCBC'}
              />
            </div>
          )}
          {offset > -(pageStep * (pages - 1)) && (
            <div className={st.mainCarousel_right}>
              <Button 
                isSlider={true} 
                isTurnedRight={true} 
                onClick={handleRight} 
                icon={<ArrowIcon />} 
                isArrow={true} 
                color={'#7D7D7D'}
                hover={'#BCBCBC'}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
