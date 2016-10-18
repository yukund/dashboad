import {createStore,applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    // check react slingshot on git hub for more details    
    applyMiddleware(reduxImmutableStateInvariant())
  );
}
