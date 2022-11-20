import React from 'react';
import { NavLink } from 'react-router-dom';
import GraphIcon from '../icons/GraphIcon';
import PhoneIcon from '../icons/PhoneIcon';
import ProfileIcon from '../icons/ProfileIcon';
import SearchIcon from '../icons/SearchIcon';
import ShoppingCartIcon from '../icons/ShoppingCartIcon';
import Logo from '../logo/Logo';
import st from './Header.module.css';
import { Navbar } from './Navbar';

export const Header = () => {


  return (
    <div className={st.header}>
      <div className={st.header_logo}>
        <NavLink to={'/'} className={st.logo}><Logo /></NavLink>
        <span className={st.lang}>
          <button className={st.lang_item}>Ru</button>
          <span className={st.lang_item}>/</span>
          <button className={st.lang_item}>En</button>
        </span>
      </div>
      <nav className={st.navbar}>
        <Navbar />
        <div className={st.icons_wrap}>
          <div className={st.icons}>
            <button className={st.icons_item}><NavLink to={'/'} ><SearchIcon /></NavLink></button>
            <button className={st.icons_item}><NavLink to={'/'} ><PhoneIcon /></NavLink></button>
            <button className={st.icons_item}><NavLink to={'/'} ><GraphIcon /></NavLink></button>
            <button className={st.icons_item}><NavLink to={'/'} ><ProfileIcon /></NavLink></button>
          </div>
          <button className={st.icons_cart}><NavLink to={'/'} ><ShoppingCartIcon /></NavLink></button>
        </div>
      </nav>
    </div>
  );
};
