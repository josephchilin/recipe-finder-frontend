import React from 'react'

class RecipeItem extends React.Component {




    render(){
        console.log(this.props.recipe, "inside recipe item")

        let {name, instruction, serving_size, time, image_url, user} = this.props.recipe
        return(
            <li classname = "li-recipe">
                <h3>{name}</h3>
                <p><b>By:</b> {user.name}</p> 
                <p><b>Yield:</b> {serving_size}</p>
                <p><b>Time:</b> {time}</p>
                <img src={image_url} alt={name} width="200"/>
                <p><b>Ingredients:</b></p>
                <p><b>Instructions:</b> {instruction}</p>
            </li>
        )
    }

}

export default RecipeItem

//create ingredients component
//map ingredients id into new array and setstate on component did mount
//loop through recipe_ingredients