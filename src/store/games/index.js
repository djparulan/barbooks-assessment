import gamesReducer from './index.slice'

export const {
  getAllGames,
  setIsLoading
} = gamesReducer.actions


export default gamesReducer.reducer