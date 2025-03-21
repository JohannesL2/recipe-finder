import React from 'react'

function SearchInput ({searchInput, setSearchInput, fetchRecipes}) {

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      fetchRecipes();
    }
  }

  return (
    <div>
      <input
    className='input bg-blue-500 hover:bg-blue-400 p-4'
    type="search"
    value={searchInput}
    onChange={(e) => setSearchInput(e.target.value)}
    onKeyDown={handleKeyDown}
     />
     <button 
     className='btn bg-blue-500 p-4 ml-2 hover:bg-blue-400' onClick={fetchRecipes}>Search</button>
    </div>
  )
}

export default SearchInput