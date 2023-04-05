import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   data: [],
   selected: []
}

export const categorySlice = createSlice({
   name: "category",
   initialState,
   reducers: {
      getAllCategories: (state, { payload }) => {
         state.data = payload
      },
      setCategories: (state, { payload }) => {
         state.selected = payload
      },
   }
})

export default categorySlice