import React from 'react'
import IngredientItem from './IngredientItem'

class RecipeItem extends React.Component {
    state = {
        ingredientlist: [],
        clicked: false,
        eric: "https://i.imgur.com/8v2somB.png",
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

    handleEdit = (evt) => {
        let recipe_object = this.props.recipe
        // console.log(recipe_object)
        this.props.editRecipeFunction(recipe_object)
        // console.log("EDIT BUTTON CLICK")
        // console.log(this.props, "EDIT RECIPE PROPS")
    }
    
    handleImageClick = (evt) => {
        this.setState({
            clicked: !this.state.clicked
        })
                    console.log(this.state.clicked, "clicked")
    }
    render(){
        // console.log(this.props, "INSIDE RECIPE ITEM")

        let {name, instruction, serving_size, time, image_url, user} = this.props.recipe
        let {eric, clicked} = this.state
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
                    <div className="recipe-name">
                        <h2>{name}</h2>
                    </div>
        
                        <div className="recipe-header">

                        <span><b>By:</b> {user.name}</span> <span><b>Yield:</b> {serving_size}</span> <span><b>Cooking Time:</b> {time} minutes</span>
                        </div>
                            <p></p> 
                        <div className="recipe-img-ing">
                            { 
                            clicked 
                            ? 
                            <img src={eric} alt={name} width="400" onClick={this.handleImageClick}/>
                            : 
                            <img src={image_url} alt={name} width="400" onClick={this.handleImageClick}/> 
                            }
                            {/* <img src={eric} alt={name} width="400" onClick={this.handleImageClick}/> */}
                              <div className="ingredient-container">
                                  <div className="ingredients-name">
                                    <h3>Ingredients:</h3>
                                  </div>
                                    <p></p>
                                <ul className="ul-recipe"> 
                                {renderIngredientArray}
                                </ul>
                              </div>
                        </div>
                        <div className="recipe-instructions">
                            <p><b>Instructions:</b> {instruction}</p>
                        </div>
                        <div className = "recipe-buttons">

                            <div>
                                {
                                // this.props.logged_in
                                user.id === user_id
                                    ?
                                    <button className="form-button" onClick={this.handleEdit}>
                                        Edit this Recipe
                                    </button>
                                    :
                                    null
                                }
                            </div>

                            <div>
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
                        </div>
                </div>
            </li>
        )
    }

}

export default RecipeItem

//create ingredients component
//map ingredients id into new array and setstate on component did mount
//loop through recipe_ingredients