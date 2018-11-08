import React, { Component } from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

class Header extends Component {
    render() {
        // console.log(this.props);
        const cart = this.props.cart;
        const cartCountStyle = {
            color:'#e94949',
            display: (cart.length) ? 'inline': 'none',
            fontWeight:700
        }

        return (
            <div className="header">
                <div className="icon-container">
                    <Link to="/">
                    <div className="sprite icon logo-icon"></div>
                    </Link>
                    <div className="divider"></div>
                    <div className="sprite logo-name"></div>
                    <div style={{width:'50%'}}></div>
                    <Link to="/cart">
                        <div className={`sprite icon ${(cart.length)? 'heart-filled' : 'heart-empty'}`}></div>
                    </Link>
                    <sup style={cartCountStyle}>{this.props.cart.length}</sup>
                    
                    <div className="sprite icon profile"></div>
                    
                </div>
            </div>
        );
    }
}

Header.defaultProps = {
    cart:[]
}
Header = connect()(Header);
export default Header;