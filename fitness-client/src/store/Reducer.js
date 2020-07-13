const initalState = {
  isAuthenticated: false,
  overview: {},
  dailyLimit: 0,
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
  } else if (action.type == "UPDOV") {
    return {
      ...state,
      overview: action.value,
    };
  } else if (action.type == "LMT") {
    return {
      ...state,
      dailyLimit: action.value,
    };
  } else if (action.type == "SUBCAL") {
    return {
      ...state,
      dailyLimit: state.dailyLimit + action.value,
    };
  }
  return state;
};

export default reducer;
