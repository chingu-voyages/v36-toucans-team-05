import {configureStore} from '@reduxjs/toolkit';
import viewReducer from './view/viewSlice';

export default configureStore({
  reducer: {
    view: viewReducer,
  },
})