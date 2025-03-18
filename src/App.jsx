import { useState } from 'react'
import './App.css'
import axios from 'axios'

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
    <input
    className='bg-blue-500 p-4'
    type="search"
    value={searchInput}
    onChange={(e) => setSearchInput(e.target.value)}
     />
     <button 
     className='btn bg-blue-500 p-4 ml-2 hover:bg-blue-400' onClick={fetchRecipes}>Search</button>

      {data.map((meal) => (
        <div key={meal.idMeal}>
        <h3>{meal.strMeal}</h3>
        <img key={meal.idMeal} src={meal.strMealThumb} alt="" />
        </div>
      ))}
    </div>
  )
}

export default App
