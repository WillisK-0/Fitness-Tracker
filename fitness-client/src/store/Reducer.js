const initalState = {
  isAuthenticated: false,
  overview: {},
  dailyLimit: 0,
  recipeSearchList: [],
  stationaryNumber: 0,
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case "AUTH":
      return {
        ...state,
        isAuthenticated: true,
      };
    case "NOTAUTH":
      return {
        ...state,
        isAuthenticated: false,
      };
    case "UPDOV":
      return {
        ...state,
        overview: action.value,
      };
    case "LMT":
      return {
        ...state,
        dailyLimit: action.value,
      };
    case "STATIONARY":
      return {
        ...state,
        stationaryNumber: action.value,
      };
    case "SUBCAL":
      return {
        ...state,
        dailyLimit: state.dailyLimit + action.value,
      };
    case "ADDCAL":
      return {
        ...state,
        dailyLimit: state.dailyLimit - action.value,
      };
    case "SEARCH":
      return {
        ...state,
        recipeSearchList: action.recipeSearchList,
      };
  }
  return state;
};

export default reducer;
