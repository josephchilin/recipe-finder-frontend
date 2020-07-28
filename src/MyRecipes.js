import React from 'react'
import RecipeContainer from './RecipeContainer'

let MyRecipes = (props) => {
    
//   let arrayOfComponents = props.recipes.map((recipePOJO) => {
//     return <RecipeItem
//       deleteRecipeFromArray={props.deleteRecipeFromArray}
//     //   updateRecipeFromArray={props.updateRecipeFromArray}
//       recipe={recipePOJO}
//       key={recipePOJO.id}
//       logged_in={props.logged_in}
//       user_id={props.user_id}
//     />
//   })

// console.log(props, "MY RECIPE PROPS")
  return (
    <div>
        "MY RECIPE CONTAINER"
        {/* <RecipeContainer 
          recipes={this.filteredRecipesArray()}  
          deleteRecipeFromArray={this.deleteRecipeFromArray}
          logged_in={logged_in}
          user_id={user_id}
        /> */}
    </div>
  )
}

export default MyRecipes