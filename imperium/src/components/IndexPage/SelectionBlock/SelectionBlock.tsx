import { NavLink } from 'react-router-dom';
import { RoundButton } from '../../../shared/RoundButton';
import player_1 from '../../../images/player_1.png';
import { Light } from '../Light';
import FullLogo from '../../../shared/logo/FullLogo';
import { About } from './About';
import st from './SelectionBlock.module.css';

export const SelectionBlock = () => {
  return (
    <div className={st.selection}>
      <h1 className={st.selection_title}>Подберем Вашу идеальную клюшку</h1>
      <p className={st.selection_text}>Пройдите тест и узнайте какая клюшкам подойдет именно вам</p>
      <div className={st.test_container}>
        <img src={player_1} alt='player' />
        <div className={st.test_button}>
          <NavLink to={'/test'}>
            <RoundButton
              text={'Пройдите тест'}
              background={'#FFFFFF'}
              color={'#333333'}
              borderColor={'#FFFFFF'}
            />
          </NavLink>
        </div>
        <div className={st.selection_logo}><FullLogo /></div>
        <Light 
          width={568} 
          color={'radial-gradient(50% 50% at 50% 50%, #F64F00 0%, rgba(246, 79, 0, 0) 100%)'} 
          top={-77} 
          blur={57}
          left={165}
        />
        <Light 
          width={524} 
          color={'radial-gradient(50% 50% at 50% 50%, #0178F3 0%, rgba(1, 120, 243, 0) 100%'} 
          top={130} 
          blur={68}
          left={950}
        />
      </div>
      <About />
    </div>
  );
};
