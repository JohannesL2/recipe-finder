import { useState } from 'react'
import './App.css'
import axios from 'axios'
import SearchInput from './components/searchInput'
import MealCard from './components/MealCard'

function App() {
  const [searchInput, setSearchInput] = useState('')
  const [data, setData] = useState([])
  const apiUrl = "https://www.themealdb.com/api/json/v1/1/";
    
    const fetchRecipes = async () => {
      if (!searchInput) return;
      try {
      const response = await axios.get(`${apiUrl}search.php?s=${searchInput}`)
      setData(response.data.meals || [])
  } catch (error) {

    console.error("Error fetching", error);
  }
}

  return (
    <div className='container max-w-[1280px] mx-auto px-8 text-center'>
    <h1 className='font-bold p-6' >Recipe Finder</h1>
    <SearchInput
    searchInput={searchInput}
    setSearchInput={setSearchInput}
    fetchRecipes={fetchRecipes}
    />
    <div>
      {data.map((meal) => (
        <MealCard key={meal.idMeal} meal={meal}/>
      ))}
    </div>
  </div>
  )
}

export default App