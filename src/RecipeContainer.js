import React from 'react'
import RecipeItem from './RecipeItem'

let RecipeContainer = (props) => {
  // [{}] -> [<>]
  let arrayOfComponents = props.recipes.map((recipePOJO) => {
    return <RecipeItem
    //   deleteRecipeFromArray={props.deleteRecipeFromArray}
    //   updateRecipeFromArray={props.updateRecipeFromArray}
      recipe={recipePOJO}
      key={recipePOJO.id}
    />
  })

  return (
    <main>
      { 
          <ul>
            {arrayOfComponents}
          </ul>
      }
    </main>
  )
}

export default RecipeContainer