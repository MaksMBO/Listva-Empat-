const defaultState = {
  lang: "uk",
  quantityInBasket: 0,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "CHANGE_LANG":
      return { ...state, lang: action.payload };
    case "ADD_GOODS":
      return {
        ...state,
        quantityInBasket: state.quantityInBasket + action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
