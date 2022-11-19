import { Button } from '../../../shared/Button';
import ArrowIcon from '../../../shared/icons/ArrowIcon';
import { Card } from '../Card';
import st from './ChoiceCarousel.module.css';

export type ChoiceCarouselProps = {
  sticksData: {
    id: number;
    src: string;
    name: string;
    price: string;
  }[];
}

export const ChoiceCarousel = ({sticksData}: ChoiceCarouselProps) => {
  const handleNext = () => {
    console.log('next');
  };
  const handlePrev = () => {
    console.log('prev');
  };


  return (
    <div className={st.choiceCarousel}>
      <div className={st.choiceCarousel_containter}>
        <div className={st.choiseCarousel_header}>
          <h1>Выбор наших клиентов</h1>
          <div>
            <Button isSlider={true} isTurnedRight={false} onClick={handlePrev} icon={<ArrowIcon />} isArrow={true}/>
            <Button isSlider={true} isTurnedRight={true} onClick={handleNext} icon={<ArrowIcon />} isArrow={true}/>
          </div>
        </div>
        <div className={st.stics_container}>
          {sticksData.map(item => (
            <Card id={item.id} src={item.src} name={item.name} info={item.price} isStickCard={true} />
          ))}
        </div>
      </div>
    </div>
    
  );
};
