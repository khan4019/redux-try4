// first  get React
import React from 'react';
import Header from '../components/Header/Header';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    cart: state.cart
});

const HeaderWithProps = ({cart}) =>(
    <Header cart={cart}></Header>
)

const HeaderContainer = connect(
    mapStateToProps,
    {}
)(HeaderWithProps);

export default HeaderContainer;