import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AppLayout from '../containers/AppLayout';
import Categories from '../containers/Categories';
import Products from '../containers/Products';
import 'antd/dist/antd.css';
import style from './App.module.css';

function App() {

  return (
    <AppLayout>
      <Routes>
        <Route exact path='/categories' element={ <Categories /> } />
        <Route exact path='/products' element={ <Products /> } />

      </Routes>
    </AppLayout>

     


  );
}

export default App;
