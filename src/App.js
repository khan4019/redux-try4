import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Feed from './components/Feed/Feed';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import Cart from './components/Cart/Cart';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleWare from 'redux-saga'

import FeedContainer from './containers/FeedContainers';
import HeaderContainer from './containers/HeaderContainer';
import CartContainer from './containers/cartContainer';
import instaShoppingApp from './reducers/index';

import productSaga from './sagas/sagas'
import { getAllProducts } from './actions/productActions';


const sagaMiddleWare = createSagaMiddleWare();


const store = createStore(
  instaShoppingApp, 
  applyMiddleware(sagaMiddleWare)
  );

sagaMiddleWare.run(productSaga);

store.dispatch(getAllProducts())

console.log(store.getState());

class App extends Component {
  render() {
    return (
       <Provider store ={store}>
            <Router>
              <div>
              <HeaderContainer></HeaderContainer>
                <Route path="/" exact component={FeedContainer}></Route>
                <Route path="/feed" component={FeedContainer}></Route>
                <Route path="/cart" component={CartContainer}></Route>
              </div>
            </Router>
       </Provider>
    );
  }
}

export default App;
