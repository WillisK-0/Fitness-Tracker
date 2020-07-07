const initalState = {
  isAuthenticated: false,
};

const reducer = (state = initalState, action) => {
  if (action.type == "AUTH") {
    return {
      ...state,
      isAuthenticated: true,
    };
  } else if (action.type == "NOTAUTH") {
    return {
      ...state,
      isAuthenticated: false,
    };
  }
  return state;
};

export default reducer;
