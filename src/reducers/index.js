import { combineReducers } from "redux";
import productReducers from './productReducers';
import productReducersLoad from './productReduces2';

const instaShoppingApp =  combineReducers({
    cart:productReducers,
    products:productReducersLoad
})

export default instaShoppingApp;