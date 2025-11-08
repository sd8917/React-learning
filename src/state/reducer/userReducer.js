export const userInitialState = {
    isLoggedIn: false,
    profile: null,
    error: null,
};


export const userReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':  
            return {
                ...state,
                isLoggedIn: true,
                profile: action.payload,
                error: null,
            };
        case 'LOGIN_ERROR':
            return {
                ...state,
                isLoggedIn: false,
                profile: null,
                error: action.payload,
            };
        case 'LOGOUT':
            return {
                ...state,
                isLoggedIn: false,
                profile: null,
                error: null,
            }
        default:
            return state;
    }   
};