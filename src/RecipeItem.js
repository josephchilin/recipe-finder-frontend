import React from 'react'
// import IngredientItem from './IngredientItem'

class RecipeItem extends React.Component {


    // componentDidMount(){

    //     let ingredientArray = () => {
    //         let arrayOfIngredients = this.props.recipe.ingredients.map((ingredient) => {       
    //             // <IngredientItem
    //             //   ingredient={recipePOJO}
    //             //   key={recipePOJO.id}
    //             // />
    //           })

    //           return arrayOfIngredients
    //     }

    // }

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
        console.log(this.props, "are you logged in")
        return(
            
            <li classname = "li-recipe">
                <h3>{name}</h3>
                <p><b>By:</b> {user.name}</p> 
                <p><b>Yield:</b> {serving_size}</p>
                <p><b>Cooking Time:</b> {time}</p>
                <img src={image_url} alt={name} width="200"/>
                {/* <p><b>Ingredients:</b> {this.ingredientArray()}</p> */}
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