import React from 'react'

function RecipeHeader(props){

  let handleType = (evt) => {
    props.changeSearchTerm(evt.target.value)
  }

  return(
    <nav>
      <h1>ReciPls</h1>
      <div className="searchBar">

        <input 
          type="text" 
          size="40"
          value={props.searchTerm}
          placeholder="What would you like to eat?"
          onChange={handleType}
        />

      </div>
    </nav>
  )
}

export default RecipeHeader