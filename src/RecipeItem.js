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

    render(){
        console.log(this.props, "inside recipe item")
        
// debugger
        let {name, instruction, serving_size, time, image_url, user} = this.props.recipe
        return(
            
            <li classname = "li-recipe">
                <h3>{name}</h3>
                <p><b>By:</b> {user.name}</p> 
                <p><b>Yield:</b> {serving_size}</p>
                <p><b>Cooking Time:</b> {time}</p>
                <img src={image_url} alt={name} width="200"/>
                {/* <p><b>Ingredients:</b> {this.ingredientArray()}</p> */}
                <p><b>Instructions:</b> {instruction}</p>
            </li>
        )
    }

}

export default RecipeItem

//create ingredients component
//map ingredients id into new array and setstate on component did mount
//loop through recipe_ingredients