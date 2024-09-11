//!Note: No need to use this reducer, use history context instead

export const initialHistoryState = localStorage.getItem('history') || [];

/* Action Types */
const ADD_HISTORY = 'ADD_HISTORY';

/* Action Creators */
export const addHistory = (cityName) => {
  return {
    type: ADD_HISTORY,
    payload: cityName,
  };
};

/* Reducer */
const historyReducer = (state, action) => {
  switch (action.type) {
    case ADD_HISTORY:
      return [action.payload, ...state.slice(0, 9)];
    default:
      return state;
  }
};

export default historyReducer;
