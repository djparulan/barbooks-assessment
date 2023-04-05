import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   selected: null
}

export const sortOrderSlice = createSlice({
   name: "games",
   initialState,
   reducers: {
      setSortOrder: (state, { payload }) => {
         state.selected = payload
      },
   }
})

export default sortOrderSlice