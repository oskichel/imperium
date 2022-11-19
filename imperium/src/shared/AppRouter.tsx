import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Accessories } from '../components/Accessories';
import { Clothes } from '../components/Clothes';
import { Custom } from '../components/Custom';
import { IndexPage } from '../components/IndexPage/IndexPage';
import { NoPage } from '../components/NoPage';
import { Order } from '../components/Order';
import { Layout } from './Layout/Layout';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<IndexPage/>}/>
          <Route path='clothes' element={<Clothes/>}/>
          <Route path='accessories' element={<Accessories/>}/>
          <Route path='customization' element={<Custom />}/>
          <Route path='order' element={<Order />}/>
          <Route path='*' element={<NoPage />}/>
        </Route>
      </Routes>
    </>
  );
};
