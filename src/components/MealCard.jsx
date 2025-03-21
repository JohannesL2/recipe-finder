import React from 'react'
import MealModal from './MealModal'

function MealCard ({meal}) {
  return (
    <div className='bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105' key={meal.idMeal}>
    <h3 className='text-neutral-700 font-bold text-lg mb-4'>{meal.strMeal}</h3>
    <img key={meal.idMeal} src={meal.strMealThumb} alt="No picture" loading='lazy' />
    <MealModal meal={meal}/>
    </div>
  )
}

export default MealCard