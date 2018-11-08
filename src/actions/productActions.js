

export const toggleAction = id => ({
    type:'TOGGLE_TO_CART',
    id
});

// export const toggleToCart = id => dispatch => {
//     return dispatch(toggleAction(id))
// };

export const getAllProducts = () => ({
      type: 'GET_ALL_PRODUCTS'
})

  
export const productsLoaded = products => ({
    type: 'PRODUCTS_LOADED',
    products: products
})
  