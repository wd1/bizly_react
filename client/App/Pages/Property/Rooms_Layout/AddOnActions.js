export const TOGGLE_TAB_ADD_ON = 'TOGGLE_TAB_ADD_ON';

export const toggleAddOnTab = (id) => {
  return {
    type: TOGGLE_TAB_ADD_ON,
    id
  };
};

export const ADD_ON_TOGGLE_CART = 'ADD_ON_TO_CART';

export const addOnToggleCart = (id, flatRate) => {
  return {
    type: ADD_ON_TOGGLE_CART,
    id,
    flatRate
  };
};

// To remove add on if order is not yet created
export const REMOVE_ADD_ON_FROM_CART = 'REMOVE_ADD_ON_FROM_CART';

export const removeAddOnFromCart = (id) => {
  return {
    type: REMOVE_ADD_ON_FROM_CART,
    id
  };
};