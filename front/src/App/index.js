import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import style from './App.module.css';
import AppLayout from '../containers/AppLayout';
import Categories from '../containers/Categories';
import Products from '../containers/Products';
import ActionCard from '../components/ActionCard'
import { useDispatch } from 'react-redux';
import { initApp } from '../reducer/actions'


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    initApp(dispatch)
    // console.log(store)
  }, []);
  return (
    <AppLayout>
      <Routes>
        <Route exact path='/' element={ <ActionCard /> } />
        <Route exact path='/categories' element={ <Categories /> } />
        <Route exact path='/products' element={ <Products /> } />

      </Routes>
    </AppLayout>

     


  );
}

export default App;
