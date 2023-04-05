

import { useEffect } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css';
import Home from './pages/Home';
import useData from './hooks/useData';

import { getAllPlatforms } from './store/platform';
import { useAppDispatch } from './store/index.hook'
import { getAllCategories } from './store/categories';
import { getAllGames, setIsLoading } from './store/games';
import ItemDetails from './pages/ItemDetails';

function App() {
  const dispatch = useAppDispatch()
  const { data, platforms, categories } = useData()

  useEffect(() => {
    dispatch(setIsLoading(!data))
    dispatch(getAllGames(data))
  }, [data, dispatch])

  useEffect(() => {
    dispatch(getAllPlatforms(platforms))
  }, [dispatch, platforms])
  
  useEffect(() => {
    dispatch(getAllCategories(categories))
  }, [dispatch, categories])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/:gameId",
      element: <ItemDetails />,
    },
  ]);
  
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
