import {createSlice} from '@reduxjs/toolkit'
import {VIEW_FORMAT} from "@/Config/enum";

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