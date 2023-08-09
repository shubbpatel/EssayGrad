import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import orderReducer from './orderReducer';

const rootReducer = combineReducers({
  order: orderReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
