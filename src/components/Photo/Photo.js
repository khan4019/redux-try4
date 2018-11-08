import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { toggleToCart } from '../../actions/productActions';

class Photo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: false
        }
    }

    toggleLiked = () =>{
        this.setState({liked: !this.state.liked})
    }
    
    render() {
        const {thumbnailUrl, url, id} = this.props.photo;
        return (
            <div>
                <h3>Photo: {this.props.i}</h3>
                <img src={thumbnailUrl} alt=""/>
                <div className="icon-container">
                    <div 
                        className={`sprite icon ${(this.props.liked) ? 'heart-filled': 'heart-empty'}`}
                        onClick={() => {
                            this.props.toggleAddToCart(id)
                            // this.toggleLiked()
                        }
                        }
                        >
                    </div>
                    <div className="sprite icon comment"></div>
                    <div className="sprite icon add"></div>
                </div>
            </div>
        );
    }
}

Photo.propTypes = {
    photo: PropTypes.object,
    i: PropTypes.number.isRequired
};

Photo.defaultProps = {
    i:100
}


export default Photo;   