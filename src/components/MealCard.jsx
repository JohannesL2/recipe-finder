import React from 'react'

function MealCard ({meal}) {
  return (
    <div key={meal.idMeal}>
    <h3>{meal.strMeal}</h3>
    <img key={meal.idMeal} src={meal.strMealThumb} alt="" />
    </div>
  )
}

export default MealCard