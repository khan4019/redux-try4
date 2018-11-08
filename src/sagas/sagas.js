import { put, take, call, fork, select, all, takeEvery } from "redux-saga/effects";
import { getProducts, productsLoaded } from '../actions/productActions';




 const fetchProducts = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data =>  data.slice(0,10));
  }


export function* getAllProducts() {
    // const products = yield call(api)
    try {
        const response = yield call(fetchProducts);
        const responseBody = response.json();
        console.log(responseBody);
        yield put(productsLoaded(responseBody))
    } catch (e) {
        // yield put(fetchFailed(e));
        return;
    }
    
  }

  export function* watchGetProducts() {
    /*
      takeEvery will fork a new `getAllProducts` task on each GET_ALL_PRODUCTS actions
      i.e. concurrent GET_ALL_PRODUCTS actions are allowed
    */
    yield takeEvery('GET_ALL_PRODUCTS', getAllProducts)
  }

  export default function* root() {
    yield all([fork(getAllProducts), fork(watchGetProducts)])
  }