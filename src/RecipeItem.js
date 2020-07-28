import React from 'react'
import IngredientItem from './IngredientItem'
// import IngredientContainer from './IngredientContainer'

class RecipeItem extends React.Component {
    state = {
        ingredientlist: [],
    }

    componentDidMount(){
        fetch("http://localhost:3000/ingredients")
        .then(resp => resp.json())
        .then(arrayOfIngredients => {
          this.setState({
            ingredientList: arrayOfIngredients
          })
        })
    }


    
    handleDelete = (evt) => {
        fetch(`http://localhost:3000/recipes/${this.props.recipe.id}`, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then((deletedRecipe) => {
            this.props.deleteRecipeFromArray(this.props.recipe.id)
        })
    }
    
    render(){
        // console.log(this.props, "inside recipe item")
        
        // debugger
        let {name, instruction, serving_size, time, image_url, user} = this.props.recipe

        let {user_id} = this.props

        let renderIngredientArray = this.props.recipe.recipe_ingredients.map((recipeIngredientPOJO) => {  
            return  <IngredientItem
              recipe_ingredient={recipeIngredientPOJO}
              ingredientList={this.state.ingredientList}
              key={recipeIngredientPOJO.id}
            />
          })

        // console.log(this.props, "RECIPE ITEM PROPS")
        return(
            

            <li className="li-recipe">
                <div className="recipe-item">
                    <h2>{name}</h2>
                        <div className="recipe-header">
                            <p><b>By:</b> {user.name} <b>Yield:</b> {serving_size} <b>Cooking Time:</b> {time}</p> 
                        </div>
                        <div className="recipe-img-ing">
                            <img src={image_url} alt={name} width="200"/>
                                  <p></p>
                              <div className="ingredient-container">
                                <h3>Ingredients:</h3>
                                    <p></p>
                                <ul className="ul-recipe"> 
                                {renderIngredientArray}
                                </ul>
                              </div>
                        </div>
                    <p><b>Instructions:</b> {instruction}</p>
                    {
                    // this.props.logged_in
                    user.id === user_id
                        ?
                        <button className="form-button" onClick={this.handleDelete}>
                            Delete this Recipe
                        </button>
                        :
                        null
                    }
                </div>
            </li>
        )
    }

}

export default RecipeItem

//create ingredients component
//map ingredients id into new array and setstate on component did mount
//loop through recipe_ingredients