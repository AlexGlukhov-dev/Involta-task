import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import data from './slices/appData'


const combinedReducer = combineReducers({
  data
});

const masterReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, ...action.payload
    }
    return nextState;
  } else {
    return combinedReducer(state, action)
  }
}

export const makeStore = () =>
  configureStore({
    reducer: masterReducer,
  });

export const wrapper = createWrapper(makeStore);