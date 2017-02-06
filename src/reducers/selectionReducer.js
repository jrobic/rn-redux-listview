import * as types from '../actions/actionTypes';

export default (state = null, action) => {
  switch (action.type) {
    case types.SELECT_LIBRARY:
      return action.libraryId;
    default:
      return state;
  }
};
