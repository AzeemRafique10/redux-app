import { ADD_TO_CART } from "../constants";

const initialState = {
  cardItems: [],
};
export default cardItems = (initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...StaticRange,
        cardData: action.data,
      };
    default:
      return state;
  }
};
