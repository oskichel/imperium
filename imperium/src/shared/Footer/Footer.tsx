import { NavLink } from 'react-router-dom';
import CopyrightIcon from '../icons/CopyrightIcon';
import TelegramIcon from '../icons/TelegramIcon';
import VkIcon from '../icons/VkIcon';
import MediumLogo from '../logo/MediumLogo';
import { RoundButton } from '../RoundButton';
import st from './Footer.module.css';
import { InfoBlock } from './InfoBlock';

export const Footer = () => {
  const handleClick = () => {

  };
  return (
    <div className={st.footer}>
      <div className={st.footer_container}>
        <div className={st.footer_logo}>
          <MediumLogo />
          <div className={st.footer_social}>
            <a href={'https://telegram.org/'} target='_blank' rel='noopener noreferrer'><TelegramIcon /></a>
            <a href={'https://vk.com/'} target='_blank' rel='noopener noreferrer'><VkIcon /></a>
          </div>
        </div>
        <div className={st.footer_content}>
          <div className={st.footer_info}>
            <InfoBlock title={'Наименование'} info={'ООО «ЗаряД»'} />
            <InfoBlock title={'Юридический адрес'} info={`Республика Татарстан, г. Набережные Челны, 
            ул. Альметьевский тракт, д. 6а`} />
            <div className={st.info_mini_block}>
              <div>
                <InfoBlock title={'Телефон'} info={'+7 (800) 511-93-90'} isPhone={true}/>
                <InfoBlock title={'ИНН'} info={'1646040440'} />
              </div>
              <div>
                <InfoBlock title={'Email'} info={'info@zaryad-hockey.ru'} isEmail={true} />
                <InfoBlock title={'ОГРН'} info={'1151674001632'} />
              </div>
            </div>
            <div className={st.footer_copyright}>
              <div>© 2017-2022 Заряд</div>
              <NavLink to={'privacypolicy'} className={st.footer_copyright_link}>Политика конфиденциальности</NavLink>
            </div>
          </div>
          <div className={st.footer_pages}>
            <div className={st.footer_brand}>
              <div>
                <h5 className={st.pages_title}>О Бренде</h5>
                <div className={st.pages}>
                  <NavLink to={'history'} className={st.footer_pages_link}>История бренда</NavLink>
                  <NavLink to={'technology'} className={st.footer_pages_link}>Технологии производства</NavLink>
                  <NavLink to={'production'} className={st.footer_pages_link}>Производство</NavLink>
                  <NavLink to={'contacts'} className={st.footer_pages_link}>Контакты магазинов</NavLink>
                </div>
              </div>
              <div>
                <h5 className={st.pages_title}>Партнерам</h5>
                <div className={st.pages}>
                  <NavLink to={'partnership'} className={st.footer_pages_link}>Как стать партнером</NavLink>
                  <NavLink to={'ourwork'} className={st.footer_pages_link}>Как мы работаем</NavLink>
                  <NavLink to={'info'} className={st.footer_pages_link}>Информация о выборе контрагентов</NavLink>
                </div>
              </div>
            </div>
            <div className={st.footer_customers}>
              <h5 className={st.pages_title}>Покупателям</h5>
              <div className={st.customers_wrap}>
                <div className={st.pages}>
                  <NavLink to={'ship'} className={st.footer_pages_link}>Доставка и оплата</NavLink>
                  <NavLink to={'exchange'} className={st.footer_pages_link}>Обмен и возврат</NavLink>
                  <NavLink to={'guarantee'} className={st.footer_pages_link}>Гарантия</NavLink>
                </div>
                <div className={st.pages}>
                  <NavLink to={'bonus'} className={st.footer_pages_link}>Бонусная программа</NavLink>
                  <NavLink to={'sizes'} className={st.footer_pages_link}>Таблица размеров</NavLink>
                  <NavLink to={'gift'} className={st.footer_pages_link}>Подарочный сертификат</NavLink>
                </div>
              </div>
            </div>
            <div className={st.footer_button}>
              <RoundButton 
                text={'Связаться с нами'} 
                background={'transparent'} 
                color={'#F64F00'} 
                borderColor={'#F64F00'} 
                onClick={handleClick} />
            </div>
            <div className={st.footer_icon}><CopyrightIcon /></div>
          </div>
        </div>
      </div>
    </div>
  );
};
