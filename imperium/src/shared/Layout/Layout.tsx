import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import st from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <Header />
      <main className={st.wrap}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export {Layout};