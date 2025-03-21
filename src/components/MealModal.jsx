import React, { useCallback, useRef, useState } from 'react'
import Modal from './Modal';

const MealModal = ({meal}) => {
  const mealRef = useRef(null);
  const [selectedMeal, setSelectedMeal] = useState(meal);

  const handleShowModal = () => {
    console.log(meal)
    if (mealRef.current) {
    mealRef.current.showModal();
    }
  }

  return (
    <div>
      <button className='btn mt-4 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' 
      onClick={handleShowModal}>
      Open modal</button>
      <Modal ref={mealRef} meal={selectedMeal} id='meal_modal'
      className='modal'>
      </Modal>
    </div>
  )
}

export default MealModal