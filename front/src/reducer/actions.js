import axios from 'axios';
import { 
  PRODUCT_LOAD_IN_PROGRESS, 
  PRODUCT_LOAD_FAIL, 
  PRODUCT_ADD_BY_ID, 
  GET_PRODUCTS_BY_LIMIT, 
  LOADING,
  INIT_APP
} from '../typesAction';


// ACTIONS
const startLoadProduct = async(id) => {
  return ({ 
    type: PRODUCT_LOAD_IN_PROGRESS,
    payload: { id }
  })
};

const resultOfLoadById = async(id) => {
  // const url = `https://fakestoreapi.com/products/${ id }`;
  const result = await axios.get(`/addProdID/${id}`);
  console.log(result.data)
  if(result.status !== 200) {
    return({
      type: PRODUCT_LOAD_FAIL,
      payload: { id }
    })
  };
  const action = {
    type: PRODUCT_ADD_BY_ID,
    payload: { product: result.data.payload}
  };
  // const action = ifStatusOk(result)
  return action;
};



const startLoading = () => {
  return ({
    type: LOADING,
    arrProductStatus: LOADING
  })
}
const actionGetByLimit = async () => {
  // const url = `https://fakestoreapi.com/products?limit=${limit}`;
  const result = await axios.get('/products');
  if(result.status !== 200) {
    return({
      type: PRODUCT_LOAD_FAIL, 
    })
  };
  const action = {
    type: GET_PRODUCTS_BY_LIMIT,
    payload: { products: result.data.payload}
  };
  return action;
};

const actionCategories = async () => {
  const result = await axios.get('https://fakestoreapi.com/products/categories');
  if(result.status !== 200) {
    return({ 
      type: PRODUCT_LOAD_FAIL
    })
  };
  const action = {
    type: INIT_APP,
    payload: { categories: result.data}
  }
  return action;
}

// COMPOSITONS
const getProductById = async(id, dispatch) => {
  dispatch(await startLoadProduct(id));
  dispatch(await resultOfLoadById(id));
};
const getProductsByLimit = async(dispatch) => {
  // dispatch(startLoading());
  dispatch(await actionGetByLimit());
}
const initApp = async(dispatch) => {
  const { payload } = await actionGetByLimit();
  const { products } = payload;
  const action = await actionCategories();
  action.payload = {...action.payload, products};
  console.log('action; ', action);
  dispatch(action);
}




export {
  getProductById,
  getProductsByLimit,
  initApp
}