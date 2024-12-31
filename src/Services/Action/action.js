import { ADD_TO_CART, REMOVE_TO_CART } from "../constants";

export const addToCart = (data) => {
  // console.log('actions', data)
  return {
    type: ADD_TO_CART,
    data: data,
  };
};

export const removeToCart = () => {
  // console.warn('actions')
  return {
    type: REMOVE_TO_CART,
  };
};

// export const removeFromCart = (id) => {
//   return {
//     type: "REMOVE_FROM_CART",
//     id: id,
//   };
// };
