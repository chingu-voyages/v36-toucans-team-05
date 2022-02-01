import {createSlice} from '../../../snowpack/pkg/@reduxjs/toolkit.js'
import {VIEW_FORMAT} from "../../Config/enum.js";

export const viewSlice = createSlice({
  name: 'view',
  initialState: {
    value: VIEW_FORMAT.Month,
  },
  reducers: {
    setView: (state, {payload}) => {
      state.value = payload
    },
    resetView: (state) => state.value = VIEW_FORMAT.Month,
  },
})

export const {setView, resetView} = viewSlice.actions

export default viewSlice.reducer;