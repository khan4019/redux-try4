import React from 'react';
import Cart from '../components/Cart/Cart';
import { connect } from 'react-redux';
const mapStateToProps = state => ({
    cart:state
})

const cartWithProps = ({cart}) =>(
    <Cart cart={cart}></Cart>
)

const CartContainer = connect(
    mapStateToProps,
    null
)(cartWithProps);

export default CartContainer;