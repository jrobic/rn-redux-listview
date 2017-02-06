import { combineReducers } from 'redux';
import libraries from './libraryReducer';
import selectedLibraryId from './selectionReducer';

const rootReducer = combineReducers({
  libraries,
  selectedLibraryId,
});

export default rootReducer;
