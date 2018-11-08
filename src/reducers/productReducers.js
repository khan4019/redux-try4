

// https://redux.js.org/basics/reducers#handling-more-actions

const productReducers = (state = [], action) => {
    switch (action.type) {
        case 'TOGGLE_TO_CART':
            // if exists remove it. if doesn't add it
            const id = action.id;
            if(state.includes(id)){
                return state.filter(currentId => currentId !== id);
            }else{
                return [...state, id]
            }
        
        default:
            return state;
    }
}

export default productReducers;