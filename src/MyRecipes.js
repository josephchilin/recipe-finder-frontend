import React from 'react'
import RecipeContainer from './RecipeContainer'

class MyRecipes extends React.Component {

  filteredRecipesArray = () => {
    let theArraytoReturn = this.props.recipeList
    // console.log(theArraytoReturn, "MY RECIPE THE ARRAY TO RETURN")
    // console.log(this.props.user_id, "MY RECIPES ARRAY USER ID")
    if (this.props.logged_in){
      theArraytoReturn = this.props.recipeList.filter((recipePOJO)=>{
        return (
          // console.log(recipePOJO.user.name, "RECIPE POJO LOGGED IN")
          recipePOJO.user.name.includes(this.props.user_name)
        )
      })
    } 
    
    return theArraytoReturn
  }

  render(){
    // console.log(this.props, "MY RECIPE PROPS")
    // console.log(this.props.user_id, "MY RECIPE USER ID")

    return (
      <div>
        <h2>{this.props.user_name}'s Recipes</h2>
          <RecipeContainer 
            recipes={this.filteredRecipesArray()}  
            deleteRecipeFromArray={this.props.deleteRecipeFromArray}
            editRecipeFunction={this.props.editRecipeFunction}
            logged_in={this.props.logged_in}
            user_id={this.props.user_id}
          />
      </div>
    )
  }
}

export default MyRecipes