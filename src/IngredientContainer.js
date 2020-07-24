import React from 'react'
import IngredientItem from './IngredientItem'

let IngredientContainer = (props) => {
    
  let arrayOfComponents = this.props.recipe.recipe_ingredients.map((recipeIngredientPOJO) => {
    return <IngredientItem
    //   deleteRecipeFromArray={props.deleteRecipeFromArray}
    //   updateRecipeFromArray={props.updateRecipeFromArray}
      recipe={recipeIngredientPOJO}
      key={recipeIngredientPOJO.id}
    //   logged_in={props.logged_in}
    //   user_id={props.user_id}
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

export default IngredientContainer