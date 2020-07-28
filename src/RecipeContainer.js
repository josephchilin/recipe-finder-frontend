import React from 'react'
import RecipeItem from './RecipeItem'

let RecipeContainer = (props) => {
    
  let arrayOfComponents = props.recipes.map((recipePOJO) => {
    return <RecipeItem
      deleteRecipeFromArray={props.deleteRecipeFromArray}
    //   updateRecipeFromArray={props.updateRecipeFromArray}
      recipe={recipePOJO}
      key={recipePOJO.id}
      logged_in={props.logged_in}
      user_id={props.user_id}
    />
  })

  return (
    <main>
      { 
        <ul className="ul-recipe">
          {arrayOfComponents}
        </ul>
      }
    </main>
  )
}

export default RecipeContainer