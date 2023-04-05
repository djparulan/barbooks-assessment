import { 
  configureStore, 
} from '@reduxjs/toolkit'
import gamesReducer from './games'
import platformReducer from './platform'
import categoryReducer from './categories'
import sortOrderReducer from './sortOrder'

const store = configureStore({
  reducer: {
      allGames: gamesReducer,
      allPlatforms: platformReducer,
      allCategories: categoryReducer,
      sortOrder: sortOrderReducer
  },
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare() 
})

export { store }