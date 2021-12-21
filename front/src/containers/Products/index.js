import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Row, Col } from 'antd';
import { getProductsByLimit, getProductById } from '../../reducer/actions.js'
import Card from '../../components/card.js';
import Sprinner from '../../components/Sprinner.js';
import style from './products.module.css';

function Products() {

  const store = useSelector( state => state);
  const dispatch = useDispatch();
  useEffect(() => {
    getProductsByLimit(dispatch)
    // console.log(store)
  }, []);
  const isLoading = store.arrProductStatus !== 'SUCCESS';

  return (
    <div>
    <Row gutter={16} >
          {isLoading ?
          <Sprinner style={{position: 'absolute', bottom: '50px'}}/> :
          store.products.map(prod =>  (
            <Col key={prod.id} className={style.card_margin}>
              <Card product={prod} />
            </Col>
          ))}
    </Row>
     

    </div>
  );
}

export default Products;