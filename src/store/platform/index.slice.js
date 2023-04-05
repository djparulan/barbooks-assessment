import { createSlice } from '@reduxjs/toolkit'

const selectedInitialValue = {
   value: 'all',
   label: 'All'
 }

const initialState = {
   data: [],
   selected: selectedInitialValue,
}

export const platformSlice = createSlice({
   name: "platform",
   initialState,
   reducers: {
      getAllPlatforms: (state, { payload }) => {
         state.data = payload
      },
      setPlatform: (state, { payload }) => {
         state.selected = payload
      }
   }
})

export default platformSlice