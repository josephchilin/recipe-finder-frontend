import React from 'react'

class IngredientItem extends React.Component {


    render(){
      // console.log(this.props.recipe, "inside ingredient item")
      
      let {measurement_type, quantity, ingredient} = this.props.recipe_ingredient


        return(
            <li className = "li-ingredient">
                { 
                <b>{quantity} {measurement_type} {ingredient.name}</b>
                 }
            </li>
        )
    }

}

export default IngredientItem

//√create ingredients component
//√loop through recipe_ingredients
