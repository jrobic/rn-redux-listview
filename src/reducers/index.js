import { combineReducers } from 'redux';
import libraries from './libraryReducer';

const rootReducer = combineReducers({
  libraries,
});

export default rootReducer;
