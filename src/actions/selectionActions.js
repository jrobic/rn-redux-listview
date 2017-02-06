import * as types from './actionTypes';

export const selectedLibrary = libraryId => ({
  type: types.SELECT_LIBRARY,
  libraryId,
});
