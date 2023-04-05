import { render, screen } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import gamesReducer from './store/games'
import platformReducer from './store/platform'
import categoryReducer from './store/categories'
import sortOrderReducer from './store/sortOrder'
import App from './App';

const allReducers = {
  allGames: gamesReducer,
  allPlatforms: platformReducer,
  allCategories: categoryReducer,
  sortOrder: sortOrderReducer
}

const renderWithRedux = (
  component,
  { initialState, store = configureStore({ reducer: allReducers, preloadedState: initialState }) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

test('renders title on screen', () => {
  renderWithRedux(<App />);
  
  const title = screen.getByText(/Find & track the best free-to-play games!/i);
  expect(title).toBeInTheDocument();
});
