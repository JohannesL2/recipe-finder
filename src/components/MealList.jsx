import React from 'react'
import MealCard from './MealCard'

const MealList = ({meals = []}) => {
  if (!meals.length) {
    return (
      <p className='text-gray-500 text-center py-6'>
        No meals found. Try searching for something else!
      </p>
    )
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6'>
    {meals?.map((meal) => (
      <MealCard key={meal.idMeal} meal={meal}/>
    ))}
    </div>
  )
}

export default MealList