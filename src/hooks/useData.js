import { useParams } from 'react-router-dom'
import { useState, useEffect, useMemo } from 'react'
import { useAppSelector } from "../store/index.hook";

const useData = () => {
  const [state, setState] = useState([]);
  const [allGames, setAllGames] = useState([])
  const [categories, setCategories] = useState([]);
  const [gameDetails, setGameDetails] = useState();

  const selectedPlatform = useAppSelector(({allPlatforms}) => allPlatforms?.selected)
  const selectedCategories = useAppSelector(({allCategories}) => allCategories?.selected)
  const selectedSortOrder = useAppSelector(({sortOrder}) => sortOrder?.selected)
  const { gameId } = useParams()

  useEffect(() => {
    const dataFetch = async () => {
      const response = await fetch('api/games')
      const data = await response.json()
 
      setState(data);
      setAllGames(data)
    };
    
    dataFetch();
  }, []);
  
  const platforms = useMemo(() => {
    return [
      {
        value: 'all',
        label: 'All'
      },
      {
        value: 'pc',
        label: 'PC'
      },
      {
        value: 'browser',
        label: 'Browser'
      }
    ]
  }, [])

  const sortOrders = useMemo(() => {
    return [
      {
        value: 'release-date',
        label: 'Release Date'
      },
      {
        value: 'alphabetical',
        label: 'Alphabetical'
      },
      {
        value: 'relevance',
        label: 'Relevance'
      }
    ]
  }, [])

  useEffect(() => {
    const categoryFetch = async () => {
      const response = await fetch('/api/categories')
      const data = await response.json()

      const remappedData = data.map((item) => {
        const newItem = item
                        .split('-')
                        .map((currentItem) => `${currentItem[0].toUpperCase()}${currentItem.substr(1)}`)
                        .join(' ')
        
        return {
          value: item,
          label: newItem
        }
      })
      
      setCategories(remappedData);
    };
    
    categoryFetch();
  }, [])

  useEffect(() => {
    const hasSelectedPlatform = selectedPlatform ? selectedPlatform.value !== 'all' : false
    
    if(hasSelectedPlatform || selectedCategories.length || selectedSortOrder) {
      const tagsString = selectedCategories
                          .map((item) => item.value)
                          .join('.')

      const hasMultipletags = selectedCategories.length > 1
      const tagParameter = hasMultipletags ? 'tag' : 'category'
      const categoryFilter = selectedCategories.length ? `${tagParameter}=${tagsString}` : ''
      
      const hasPlatformUppersand = !!selectedCategories.length ? '&' : ''
      const platformFilter = hasSelectedPlatform ? `${hasPlatformUppersand}platform=${selectedPlatform.value}` : ''

      const hasSortOrderUppersand = selectedCategories.length || hasSelectedPlatform ? '&' : ''
      const sortOrderFilter = selectedSortOrder ? `${hasSortOrderUppersand}sort-by=${selectedSortOrder.value}` : ''
      
      const parameter = hasMultipletags ? 'filter' : 'games'

      const url = `/api/${parameter}?${categoryFilter}${platformFilter}${sortOrderFilter}`

      const dataFetchWithParameters = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setState(data?.status === 0 ? [] : data);
      };

      dataFetchWithParameters();
    } else {
      setState(allGames);
    }
  }, [allGames, selectedCategories, selectedCategories.length, selectedPlatform, selectedSortOrder])

  useEffect(() => {
    if(gameId) {
      const dataFetch = async () => {
        const response = await fetch(`/api/game?id=${gameId}`)
        const data = await response.json()
   
        setGameDetails(data);
      };
      
      dataFetch();
    }
  }, [gameId])

  return { 
    data: state, 
    platforms,
    categories,
    sortOrders,
    gameDetails
   };
};

export default useData