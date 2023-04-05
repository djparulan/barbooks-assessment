import { useState, useEffect } from 'react'
import FilterItem from '../../components/FilterItem'
import GameItem from '../../components/GameItem'
import styles from './index.module.scss'
import { useAppSelector, useAppDispatch } from '../../store/index.hook'
import { setPlatform } from '../../store/platform'
import { setIsLoading } from '../../store/games'
import { setCategories } from '../../store/categories'
import { setSortOrder } from '../../store/sortOrder'
import useData from '../../hooks/useData'
import searchData from '../../utils/search'

const Home = ({ data }) => {
  const [search, setSearch] = useState('')
  const [searchResult, setSearchResult] = useState()
  
  const dispatch = useAppDispatch()
  
  const isLoading = useAppSelector(({allGames}) => allGames.isLoading)
  const getAllGames = useAppSelector(({allGames}) => allGames.data)
  const getAllPlatforms = useAppSelector(({allPlatforms}) => allPlatforms.data)
  const getAllCategories = useAppSelector(({allCategories}) => allCategories.data)

  const { sortOrders } = useData()

  useEffect(() => {
    setSearchResult(getAllGames)
  }, [getAllGames])

  useEffect(() => {
    if(search) {
      const data = searchData(search, getAllGames)
      setSearchResult(data)
    }
    
    if(!search) {
      setSearchResult(getAllGames)
    }
  }, [getAllGames, search])

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }
  
  const handlePlatformChange = (newValue) => {
    dispatch(setIsLoading(true))
    dispatch(setPlatform(newValue))
  }

  const handleCategoriesChange = (newValue) => {
    dispatch(setIsLoading(true))
    dispatch(setCategories(newValue))
  }

  const handleSortChange = (newValue) => {
    dispatch(setIsLoading(true))
    dispatch(setSortOrder(newValue))
  }

  return (
    <div className={styles.body}>
      <h1 className={styles.title}>Find & track the best free-to-play games!</h1>
      <h4 className={styles.subtitle}>Search for what to play next!</h4>
      <div className={styles.search__container}>
        <div className={styles.search}>
          <input 
            className={styles.search__input} 
            type="text" 
            value={search}
            placeholder='Search by Name...'
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className={styles.filters}>
        <FilterItem 
          label='Filter by Platform' 
          data={getAllPlatforms} 
          onChange={handlePlatformChange} 
        />
        <FilterItem 
          label='Filter by Category' 
          data={getAllCategories} 
          isMulti={true} 
          onChange={handleCategoriesChange}
        />
        <FilterItem 
          label='Sort by' 
          data={sortOrders} 
          onChange={handleSortChange}
        />
      </div>
      <div className={styles.lists}>
        {
          searchResult && !isLoading 
          ? searchResult?.map((item) => (
            <GameItem key={item.id} item={item} />
          ))
          : <span>Loading...</span>
        }
      </div>
    </div>
  )
}

export default Home