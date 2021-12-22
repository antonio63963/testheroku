import update from 'immutability-helper';
import { 
  PRODUCT_LOAD_IN_PROGRESS, 
  PRODUCT_LOAD_FAIL, 
  PRODUCT_ADD_BY_ID, 
  GET_PRODUCTS_BY_LIMIT, 
  LOADING,
  INIT_APP
} from '../typesAction';


const initialState = {
  categories: [],
  products: []
};

const reducer = (state = initialState, action) => {

  const findFilmIdx = (id) => {
    return state.products.findIndex(product => product.id == id);
  };

  switch(action.type) {
    case LOADING: {
      return update(state, {
        arrProductStatus: {$set: {LOADING}}
      })
    }
    case PRODUCT_LOAD_IN_PROGRESS: {
      const product = {
        id: Number(action.payload.id), status: 'in_progress', 
      };
      return update(state, {products: { $push: [product] }});
    };
      
    case PRODUCT_LOAD_FAIL: {
      const ind = findFilmIdx(action.payload.id);
      return update(state, { 
        products: { 
          [ind]: { 
            status: {$set: 'fail'}
          }
        }
      });
    };

    case PRODUCT_ADD_BY_ID: {
      const ind = findFilmIdx(action.payload.product.id);
      const res = update(state, { products: {[ind]: {
        $set: action.payload.product,
      }}});
      console.log('add : ', ind, res);
      return res;
    };

    case LOADING: {
      return update(state, {$set:{arrProductStatus: action.payload}})
    }
    case GET_PRODUCTS_BY_LIMIT : {

      return update(state, {
        products: {$set: action.payload.products}, 
        arrProductStatus: {$set: 'SUCCESS'}})
    }
    case INIT_APP: {
      return update(state, {
        categories: {$set: action.payload.categories},
        products: {$set: action.payload.products},
        arrProductStatus: {$set: 'SUCCESS'}
      })
    }
    default: 
     return state
  }
};

export default reducer;