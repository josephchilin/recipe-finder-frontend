import React, { Component } from 'react';

class NewIngredientForm extends Component {

  state={
    ingredientList: [],
    name: "",
    recipe_id: "",
    ingredient_id: "",
    quantity: "",
    measurement_type: "",
 
  }

  componentDidMount() {
    // console.log(this.props, "INGREDIENT FORM PROPS")
    fetch("http://localhost:3000/ingredients")
    .then(resp => resp.json())
    // .then(console.log)
    .then(arrayOfIngredients => {
      this.setState({
        ingredientList: arrayOfIngredients
      })
    })
    // this.setState({
    //   recipe_id: this.props.id
    // })
  }

  handleInput = (evt) => {

    this.setState({
      [evt.target.name]: evt.target.value
    })

  }

  handleSubmit = (evt) => {
    evt.preventDefault()

    let {name, ingredientList, quantity, measurement_type} = this.state

    let new_ingredient = ingredientList.find(ingredient => ingredient.name === name.toLowerCase())
    let new_measurement_type = measurement_type.toLowerCase()
    // console.log(new_ingredient.id, "NEW INGREDIENT ID")

    fetch("http://localhost:3000/recipe_ingredients", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        recipe_id: this.props.recipe.id,
        ingredient_id: new_ingredient.id,
        quantity: quantity,
        measurement_type: new_measurement_type,
      })
    })
    .then(r => r.json())
    .then((newIngredient) => {
      this.props.updateRecipeArray();
    // console.log(newIngredient, "FETCH POST NEW INGREDIENT")
    })

  }

  render() {
      // console.log(this.props, "INGREDIENT FORM PROPS")
    return (

      <div className="ingredient-form">

      <form onSubmit={this.handleSubmit}>
        <label htmlFor="f_ingredient_name">Name: </label>
        <input
          type="text"
          name="name"
          id="f_ingredient_name"
          autoComplete="off"
          value={this.state.name}
          placeholder="What is your ingredient called?"
          size="50"
          onChange={this.handleInput}
        />
        <p></p>
        <label htmlFor="f_ingredient_quantity">Quantity: </label>
        <input
          type="integer"
          name="quantity"
          id="f_ingredient_quantity"
          autoComplete="off"
          value={this.state.quantity}
          placeholder="How much of this ingredient is needed?"
          size="50"
          onChange={this.handleInput}
        />
        <p></p>
        <label htmlFor="f_ingredient_measurement_type">Measurement Type: </label>
        <input
          type="integer"
          name="measurement_type"
          id="f_ingredient_measurement_type"
          autoComplete="off"
          value={this.state.measurement_type}
          placeholder="What is the measurement type? (ex. cups, ounces)"
          size="50"
          onChange={this.handleInput}
        />
        <p></p>
        <input className="form-button" type="submit" value="Add A New Ingredient" />
      </form>
      </div>
    );
  }

}

export default NewIngredientForm;
//state that counts number of ingredients, render ingredient form

// t.integer "recipe_id"
// t.integer "ingredient_id"
// t.float "quantity"
// t.string "measurement_type"