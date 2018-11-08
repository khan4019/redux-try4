const productReducersLoad = (state =[],action) =>{
    switch (action.type) {
        case 'PRODUCTS_LOADED':
            return action.products;
    
        default:
            return state;
    }
}

export default productReducersLoad;