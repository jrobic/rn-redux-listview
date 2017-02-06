import { createStore } from 'redux';

import rootReducer from '../reducers';

export default function configureStore(persistedState) {
  return createStore(
    rootReducer,
    persistedState,
  );
}
