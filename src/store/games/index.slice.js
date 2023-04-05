import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   data: [],
   isLoading: false
}

export const gamesSlice = createSlice({
   name: "games",
   initialState,
   reducers: {
      getAllGames: (state, { payload }) => {
         state.data = payload
      },
      setIsLoading: (state, { payload }) => {
         state.isLoading = payload
      },
   }
})

export default gamesSlice