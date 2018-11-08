import React from 'react'
import { toggleAction, getAllProducts } from '../actions/productActions';
import { connect } from "react-redux";
import Feed from '../components/Feed/Feed';
import { bindActionCreators } from 'redux';


const mapStateToProps = state => ({
    cart:state.cart,
    products:state.products
});

const mapDispatchToProps = dispatch => ({
    toggleToCart: bindActionCreators(toggleAction, dispatch),
    loadProducts: bindActionCreators(getAllProducts, dispatch)
})

const FeedWithProps = ({cart, products, toggleToCart, loadProducts}) => (
    <Feed cart={cart} products={products} toggleToCart= {toggleToCart} loadProducts={loadProducts}></Feed>
)

const FeedContainer = connect(
    mapStateToProps, 
    mapDispatchToProps
)(FeedWithProps);

export default FeedContainer;