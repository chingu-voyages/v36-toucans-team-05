import {configureStore} from '../../snowpack/pkg/@reduxjs/toolkit.js';
import viewReducer from './view/viewSlice.js';

export default configureStore({
  reducer: {
    view: viewReducer,
  },
})