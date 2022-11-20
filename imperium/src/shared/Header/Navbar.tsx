import React from 'react';
import { NavLink } from 'react-router-dom';
import st from './Header.module.css';

export const Navbar = () => {
  return (
    <div className={st.links}>
      <NavLink to={'/'} className={st.links_item}>Клюшки</NavLink>
      <NavLink to={'/clothes'} className={st.links_item}>Одежда</NavLink>
      <NavLink to={'/accessories'} className={st.links_item}>Аксессуары</NavLink>
      <NavLink to={'/customization'} className={st.links_item}>Кастомизация</NavLink>
      <NavLink to={'/order'} className={st.links_item}>Отследить заказ</NavLink> 
    </div>
  );
};