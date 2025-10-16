import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import SearchInput from './components/SearchInput'
import MealCard from './components/MealCard'
import MealModal from './components/MealModal'

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

useEffect(() => {
const fetchRandomRecipes = async () => {
  try {
  const randomResponse = await Promise.all(
    Array.from({length: 5}, () => axios.get(`${apiUrl}random.php`) )
  )
  setData(randomResponse.map(res => res.data.meals[0]));
} catch (error) {
console.error("Error fetching", error);
}
};

    fetchRandomRecipes();
}, []);

  return (
    <div className='container max-w-[1280px] mx-auto px-8 text-center'>
    <h1 className='font-bold p-6 mb-4' >Recipe Finder</h1>
    <SearchInput
    searchInput={searchInput}
    setSearchInput={setSearchInput}
    fetchRecipes={fetchRecipes}
    />

    {searchInput ? (
      <h2 className='text-lg font-semibold mt-6'>Search results:</h2>
    ) : (
      <h2 className='text-lg font-semibold mt-6'>Random recipes:</h2>
    )}

    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6 mt-6'>
      {data.map((meal) => (
        <MealCard key={meal.idMeal} meal={meal}/>
      ))}
    </div>
  </div>
  )
}

export default App
