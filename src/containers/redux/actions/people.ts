export const updatePeople = (payload) => ({
  type: "UPDATE_PEOPLE",
  payload: payload,
});
export const addToFavorite = (payload) => ({
  type: "ADD_TO_FAVORITE",
  payload: payload,
});
export const removeFromFavorite = (payload) => ({
  type: "REMOVE_FROM_FAVORITE",
  payload: payload,
});
