import { NavLink } from 'react-router-dom';
import { RoundButton } from '../../../shared/RoundButton';
import technology from '../../../images/technology.jpg';
import style from '../../../images/style.jpg';
import { CompanyCard } from './CompanyCard';
import st from './SelectionBlock.module.css';

export const About = () => {
  return (
    <div className={st.about}>
      <div className={st.content_container}>
        <div className={st.brand_container}>
          <h1 className={st.about_header}>О бренде ЗаряД</h1>
          <p className={st.brand_text}>
          Первый завод в России по производству
          полного ассортимента высококачественных хоккейных клюшек для всех возрастных категорий и уровней игры
          </p>
          <NavLink to={'/aboutcompany'}>
            <RoundButton 
              text={'Подробнее\nо компании'} 
              background={'transparent'}
              color={'#F64F00'}
              borderColor={'#F64F00'} 
            />
          </NavLink> 
        </div>
        <div className={st.info_container}>
          <CompanyCard 
            title={'Космические технологии'} 
            text={`Первый завод в России по производству полного ассортимента
          высококачественных хоккейных клюшек для всех возрастных категорий и уровней игры`} 
            img={technology} 
          />
          <CompanyCard 
            title={'Российский стиль'} 
            text={`Клюшки заряд специально спроектированы для точной
          игры в пас, первого длинного паса, максимального контроля шайбы и остроатакующей комбинационной игры`} 
            img={style} 
          />
        </div>
      </div>
    </div>
  );
};
