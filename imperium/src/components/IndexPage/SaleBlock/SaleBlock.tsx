//import sale_text from '../../../images/sale_text.png';
import sale from '../../../images/sale.jpg';
import { Light } from '../Light';
import SaleText from '../../../images/SaleText';
import st from './SaleBlock.module.css';
import { SubscribeForm } from './SubscribeForm';

export const SaleBlock = () => {
  return (
    <div className={st.sale}>
      <div  className={st.sale_container}>
        <div>
          <div className={st.lights_container}>
            <SaleText />
            <Light 
              width={105}
              height={105}
              color={'radial-gradient(50% 50% at 50% 50%, #0178F3 0%, rgba(1, 120, 243, 0) 100%)'} 
              blur={32}
              top={0}
              left={310}
            />
            <Light 
              width={90}
              height={90}
              color={'radial-gradient(50% 50% at 50% 50%, #F64F00 0%, rgba(246, 79, 0, 0) 100%)'} 
              blur={32}
              top={118}
              left={-17}
            />
          </div>
          <p className={st.text}>
          Никакого спама и рекламы, только полезная информация, скидки и персональные предложения
          </p>
          <SubscribeForm />
        </div>
        <div className={st.pic_container}>
          <div className={st.sale_pic}>
            <img src={sale} alt='player' />
          </div>
        </div>
      </div>
    </div>
  );
};
