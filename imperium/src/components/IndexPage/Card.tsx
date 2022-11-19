import { Button } from '../../shared/Button';
import { ButtonWithText } from '../../shared/ButtonWithText';
import GraphIcon from '../../shared/icons/GraphIcon';
import st from './IndexPage.module.css';

export type CardProps = {
  id: number;
  src: string;
  name: string;
  info: string;
  genitiveName?: string;
  isStickCard?: boolean;
}

export const Card = ({id, src, name, info, genitiveName, isStickCard = false}: CardProps) => {
  const handleClick = () => {

  };

  const stickCard = <div>
    <img src={src} alt={name} />
    <div>{name}</div>
    <div>{info}</div>
    <div className={st.card_stick_buttons}>
      <Button isSlider={false} isTurnedRight={false} onClick={handleClick} icon={<GraphIcon />} />
      <ButtonWithText onClick={handleClick} text={'Подробнее'} />
    </div>
  </div>;

  const mainCard = <div key={id} className={st.card}>
    <img src={src} alt={name} className={st.card_img} />
    <div className={st.card_block}>
      <h4 className={st.card_name} >{name}</h4>
      <p className={st.card_info} >{info}</p>
      <button className={st.card_button} >Отзывы {genitiveName}</button>
    </div>
  </div>;
  
  return (
    <>
      {isStickCard ? stickCard : mainCard}
    </>
  );
};
