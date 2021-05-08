const initialState = {
  list: [],
  favoriteList: [],
};

const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_PEOPLE": {
      return { ...state, list: action.payload };
    }
    case "ADD_TO_FAVORITE": {
      const newFavoriteList = state.favoriteList;
      newFavoriteList.push(action.payload);
      return { ...state, newFavoriteList };
    }
    case "REMOVE_FROM_FAVORITE": {
      const newFavoriteList = state.favoriteList;
      newFavoriteList.push(action.payload);
      return { ...state, newFavoriteList };
    }
    default: {
      return state;
    }
  }
};
export default peopleReducer;
