import React from 'react'

class IngredientItem extends React.Component {

    state={
        // ingredientList: [],
        // ingredientName: ""
    }
    
    componentDidMount(){
      // fetch("http://localhost:3000/ingredients")
      // .then(resp => resp.json())
      // .then(arrayOfIngredients => {
      //   this.setState({
      //     ingredientList: arrayOfIngredients
      //   })
      // })

      // this.setState({
      //   ingredientList: this.props.ingredientList

      // })

    }

    componentDidUpdate(){

      // let {ingredient_id} = this.props.recipe_ingredient
      // let ingredientPOJO = this.state.ingredientList.find(ingredient => ingredient.id === ingredient_id)
      // console.log(ingredientPOJO.name, "COMPONENT DID UPDATE INGREDIENT POJO")

      // this.setState({
      //   ingredientName: ingredientPOJO.name
      // })
    }
    

    
    render(){
      // console.log(this.props.recipe, "inside ingredient item")
      
      let {measurement_type, quantity, ingredient} = this.props.recipe_ingredient
      // let {ingredientName} = this.state
      
      // let ingredientPOJO = this.state.ingredientList.find(ingredient => ingredient.id === ingredient_id)

      // console.log(ingredientPOJO, "FOUND INGREDIENT POJO")
      // console.log(ingredientPOJO.name)
      // console.log(this.props, "PROPS IN RENDER")
      // console.log(this.state, "INGREDIENT LIST STATE")
      // debugger

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
//√map ingredients id into new array and setstate on component did mount
//find name from fetched ingredient array by using ingredient_id from props