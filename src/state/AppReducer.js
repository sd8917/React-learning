import { userReducer, userInitialState } from "./reducer/userReducer";
import { cartReducer, cartInitialState } from "./reducer/cartReducer";

export const initialState = {
  user: userInitialState,
  cart: cartInitialState,
};

export function appReducer(state, action) {
  return {
    user: userReducer(state.user, action),
    cart: cartReducer(state.cart, action),
  };
}
