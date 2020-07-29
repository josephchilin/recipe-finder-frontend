import React from 'react'
import RecipeContainer from './RecipeContainer'

class MyRecipes extends React.Component {

  state = {
    recipeList: []
  }
    // componentDidMount(){

    // }

  // let arrayOfComponents = props.recipes.map((recipePOJO) => {
  //   return <RecipeItem
  //     deleteRecipeFromArray={props.deleteRecipeFromArray}
  //   //   updateRecipeFromArray={props.updateRecipeFromArray}
  //     recipe={recipePOJO}
  //     key={recipePOJO.id}
  //     logged_in={props.logged_in}
  //     user_id={props.user_id}
  //   />
  // })

  componentDidMount() {
    fetch("http://localhost:3000/recipes")
    .then(resp => resp.json())
    // .then(console.log)
    .then(arrayOfRecipes => {
      this.setState({
        recipeList: arrayOfRecipes
      })
    })
  }

  filteredRecipesArray = () => {
    // debugger
    let theArraytoReturn = this.state.recipeList
    
    // console.log(theArraytoReturn, "MY RECIPE THE ARRAY TO RETURN")
    // console.log(this.props.user_id, "MY RECIPES ARRAY USER ID")
    if (this.props.logged_in){
      theArraytoReturn = this.state.recipeList.filter((recipePOJO)=>{
        return (
          // console.log(recipePOJO.user.name, "RECIPE POJO LOGGED IN")
          recipePOJO.user.name.includes(this.props.user_name)
        )
      })
    } 
    
    return theArraytoReturn
  }

  deleteRecipeFromMyRecipes = (id) => {
    let copyOfList = this.state.recipeList.filter((recipe) => {
      return recipe.id !== id 
    })

    this.setState({
      recipeList: copyOfList
    })
  }

  render(){
    // console.log(this.props, "MY RECIPE PROPS")
    // console.log(this.props.user_id, "MY RECIPE USER ID")

    return (
      <div>
          <RecipeContainer 
            recipes={this.filteredRecipesArray()}  
            deleteRecipeFromArray={this.props.deleteRecipeFromArray}
            logged_in={this.props.logged_in}
            user_id={this.props.user_id}
          />
      </div>
    )
  }
}

export default MyRecipes

//component did mount fetch user


// let renderIngredientArray = this.props.recipe.recipe_ingredients.map((recipeIngredientPOJO) => {  
//   return  <IngredientItem
//     recipe_ingredient={recipeIngredientPOJO}
//     ingredientList={this.state.ingredientList}
//     key={recipeIngredientPOJO.id}
//   />
// })