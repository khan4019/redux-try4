import React, { Component } from 'react';
import './Feed.css';
import Photo from '../Photo/Photo';
import Header from '../Header/Header';

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: []
        }
    }

    componentDidMount() {
        console.log(this.props);
        this.props.loadProducts();
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            .then(data => this.setState({photos: data.slice(0,10)}))
    }
    
    // toggleAddToCart = id => {
    //     let newCart ;
    //     if(this.state.cart.includes(id)){
    //         newCart = this.state.cart.filter( item => item !== id);
    //     }
    //     else {
    //         newCart = [...this.state.cart, id]
    //     }
    //     console.log(newCart);
    //     this.setState({cart:newCart});
    // }
    
    render() {
        console.log(this.props);
        return (
            <div>
                <div className="feed">
                    {
                        this.state.photos.map((photo, i) => 
                        <Photo 
                            key={photo.id} 
                            photo={photo} 
                            liked={this.props.cart.includes(photo.id)}
                            toggleAddToCart = {this.props.toggleToCart}
                            >{photo.title}</Photo>)
                    }
                </div>
            </div>
        );
    }
}

export default Feed;