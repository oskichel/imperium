import { addCaseDeclension } from '../../utils/caseDeclension';
import FullLogo from '../../shared/logo/FullLogo';
import st from './IndexPage.module.css';
import { Card } from './Card';
import { Light } from './Light';

export type MainCarouselProps = {
  cardsData: {
    id: number;
    src: string;
    name: string;
    info: string;
  }[];
};

export const MainCarousel = ({cardsData}: MainCarouselProps ) => {
  return (
    <div className={st.container}>
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
      <div className={st.carousel}>
        {cardsData.map((item) => (
          <Card 
            id={item.id} 
            name={item.name} 
            src={item.src} 
            info={item.info} 
            genitiveName={addCaseDeclension(item.name)} 
          />
        ))}
      </div>
    </div>
  );
};
