import React, { forwardRef } from 'react'
import SocialShareButtons from './SocialShareButtons';

const Modal = forwardRef (({ meal }, ref) => {

  if (!meal) {
    return null;
  }

  const getIngredientImage = (ingredient) => {
    if (!ingredient) return null;
    const formatedIngredient = ingredient.toLowerCase().replace(/\s+/g, '_');
    return `https://www.themealdb.com/images/ingredients/${formatedIngredient}.png`;
  }

  const shareUrl = `https://www.themealdb.com/meal/${meal.idMeal}`;

  return (
    <dialog ref={ref} id="my_modal_1" className="modal">
      <div className="modal-box overflow-auto">
        <h3 className="font-bold text-lg mb-6">{meal.strMeal}</h3>
        <div className='flex items-center gap-10 mb-6'>
        <img src={meal.strMealThumb} className='size-46 object-cover rounded-lg mb-2' alt="" loading='lazy' />
        <p>▶️<a href={meal.strYoutube} target="_blank" rel="noopener noreferrer">Watch on YouTube</a></p>
        <SocialShareButtons url={shareUrl} title={meal.strMeal}/>
        </div>
        
        <p><strong>Category:</strong> {meal.strCategory}</p>
        <p><strong>Country:</strong> {meal.strArea}</p>

        {/*Ingredienser och mått*/}
        <h3 className="font-bold text-lg mb-6">Ingredients and measures for: {meal.strMeal}</h3>

        {[...Array(20)].map((_, i) => {
          const ingredient = meal[`strIngredient${i + 1}`];
          const measure = meal[`strMeasure${i + 1}`];
          if (!ingredient) return null;

          const ingredientImage = getIngredientImage(ingredient)

          return (
            <div key={i} className='flex items-center gap-2 mb-4'>
              {ingredientImage && (
              <img src={ingredientImage} alt={ingredient} className='size-16 object-cover'
              loading='lazy'
              />
          )}
        <p>{ingredient} {measure}</p>
        </div>
  );
})}

<hr className='p-2 mt-6'/>
<h3 className="font-bold text-lg mb-6">Preparation</h3>
<p className='whitespace-pre-line'>{meal.strInstructions}</p>

        <p className="py-4 opacity-50">Press ESC key or click the button below to close</p>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
            <button className="btn absolute top-4 right-4">X</button>
          </form>
        </div>
      </div>
    </dialog>
  )
});

export default Modal