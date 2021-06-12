const initialState = {
  list: [],
};

const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPLOAD_PEOPLE_ACTION": {
      return { ...state, list: action.payload };
    }
    default: {
      return state;
    }
  }
};
export default peopleReducer;
