export const cartInitialState = {
    items:[],
    total: 0,
}

export const cartReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                items: [...state.items, action.payload],
                total: state.total + action.payload.price,
            };
        case 'REMOVE_ITEM':
            const updated = state.items.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                items: updated,
                 total: updated.reduce((t, i) => t + i.price, 0),
            };
        default:
            return state;
    }  
};