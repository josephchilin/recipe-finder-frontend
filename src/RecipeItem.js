import React from 'react'
import IngredientItem from './IngredientItem'
import IngredientContainer from './IngredientContainer'

class RecipeItem extends React.Component {


    componentDidMount(){
        // this.renderIngredientArray
        // let ingredientArray = () => {
            // let ingredientArray = this.props.recipe.recipe_ingredients.map((recipeIngredientPOJO) => {  
            //     return     
            //     <IngredientItem
            //       recipe_ingredient={recipeIngredientPOJO}
            //       key={recipeIngredientPOJO.id}
            //     />
            //   })

        // }

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
              key={recipeIngredientPOJO.id}
            />
          })

        console.log(this.props, "RECIPE ITEM PROPS")
        return(
            

            <li classname = "li-recipe">
                <h3>{name}</h3>
                <p><b>By:</b> {user.name}</p> 
                <p><b>Yield:</b> {serving_size}</p>
                <p><b>Cooking Time:</b> {time}</p>
                <img src={image_url} alt={name} width="200"/>
                <p><b>Ingredients:</b> {
                    // <IngredientItem />
                    renderIngredientArray
                    // <IngredientContainer 
      
                    // />
                    }</p>
                <p><b>Instructions:</b> {instruction}</p>
                {
                // this.props.logged_in
                user.id === user_id
                    ?
                    <button className="delete-button" onClick={this.handleDelete}>
                        Delete this Recipe
                    </button>
                    :
                    null
                }
            </li>
        )
    }

}

export default RecipeItem

//create ingredients component
//map ingredients id into new array and setstate on component did mount
//loop through recipe_ingredients