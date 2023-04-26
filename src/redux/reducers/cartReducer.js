import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;
      const existItem = state.cartItems.find(product => product.id === item.id);
      if (existItem) {
        return {
          ...state, cartItems: state.cartItems.map(x => x.product === existItem.product ? item : x)
        }
      } else {
        return { ...state, cartItems: [...state.cartItems, item] }
      }

    case REMOVE_FROM_CART:
      return { ...state, cartItems: state.cartItems.filter(product => product.id !== action.payload) }

    default:
      return state;
  }
}