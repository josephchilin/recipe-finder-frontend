import React from 'react'

class IngredientItem extends React.Component {

    state={
        ingredientList: [],

    }
    // let ingredient = ingredientList.find(ingredient => ingredient.id === SOME ID)

    componentDidMount(){
        fetch("http://localhost:3000/ingredients")
        .then(resp => resp.json())
        // .then(console.log)
        .then(arrayOfIngredients => {
          this.setState({
            ingredientList: arrayOfIngredients
          })
        })
        console.log (this.props)

      }


    render(){
        // console.log(this.props.recipe, "inside ingredient item")

        // let {name, instruction, serving_size, time, image_url, user} = this.props.recipe
        return(
            <li classname = "li-ingredient">
                { 
                
                <p><b>Quantity:</b> {this.props.quantity}</p>
                 }
            </li>
        )
    }

}

export default IngredientItem

//create ingredients component
//map ingredients id into new array and setstate on component did mount
//loop through recipe_ingredients