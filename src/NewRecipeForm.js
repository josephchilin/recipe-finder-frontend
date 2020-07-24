import React, { Component } from 'react';
import NewIngredientForm from './NewIngredientForm'

class NewRecipeForm extends Component {

  state={
    name: "",
    image_url: "",
    serving_size: "",
    time: "",
    user_id: "",
    instruction: "",
    cuisine_id: 5,
    cuisineList: [],
    new_recipe_object: "",
    ingredient_counter: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/cuisines")
    .then(resp => resp.json())
    // .then(console.log)
    .then(arrayOfCuisines => {
      this.setState({
        cuisineList: arrayOfCuisines
      })
    })
    this.setState({
      user_id: this.props.user_id
    })
  }

  handleInput = (evt) => {

    this.setState({
      [evt.target.name]: evt.target.value
    })

  }

  handleSubmit = (evt) => {
    // console.log(this.state, "STATE BEFORE FETCH")
    evt.preventDefault()

    let {name, image_url, serving_size, time, instruction, cuisine_id, user_id} = this.state

    fetch("http://localhost:3000/recipes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify({
        name: name,
        image_url: image_url,
        serving_size: serving_size,
        time: time,
        instruction: instruction,
        cuisine_id: cuisine_id,
        rating: null,
        user_id: user_id
      })
    })
    .then(r => r.json())
    .then((newRecipe) => {
      // console.log(newRecipe, "AFTER FETCH NEW RECIPE PROMISE")
      this.props.addNewRecipeToArray(newRecipe);

      this.setState({
        new_recipe_object: newRecipe
      })
    })

  }

  handleClick = (evt) => {
    this.setState({
      ingredient_counter: [...this.state.ingredient_counter, 1]
      // console.log(this.state.ingredient_counter)
    })
  }

  // form_list = () => {
  //   let ingredient_times = this.state.ingredient_counter
  //         for (let index = 0; index < ingredient_times; index++) {
            
  //           <NewIngredientForm 
  //           recipe={this.state.new_recipe_object}
  //           />
            
  //         }

  // }
  render() {
      console.log(this.state.new_recipe_object, "RECIPE OBJECT INSIDE RECIPE FORM RENDER")

     


    return (

      <div className="recipe-form">

      <form onSubmit={this.handleSubmit}>
        <label htmlFor="f_name">Name: </label>
        <input
          type="text"
          name="name"
          id="f_name"
          autoComplete="off"
          value={this.state.name}
          placeholder="What is your recipe called?"
          size="50"
          onChange={this.handleInput}
        />
        <p></p>
        <label htmlFor="f_yield">Yield: </label>
        <input
          type="integer"
          name="serving_size"
          id="f_yield"
          autoComplete="off"
          value={this.state.serving_size}
          placeholder="How many servings does your recipe make?"
          size="50"
          onChange={this.handleInput}
        />
        <p></p>
        <label htmlFor="f_time">Cooking Time: </label>
        <input
          type="integer"
          name="time"
          id="f_time"
          autoComplete="off"
          value={this.state.time}
          placeholder="How long does it take to cook your recipe in minutes?"
          size="50"
          onChange={this.handleInput}
        />
        <p></p>
        <label htmlFor="f_image">Image: </label>
        <input
          type="url"
          name="image_url"
          id="f_image"
          // autoComplete="off"
          value={this.state.image_url}
          placeholder="Enter a URL for your recipe's image"
          size="50"
          onChange={this.handleInput}
        />
        <p></p>
        <label htmlFor="f_instruction">Instructions: </label>
        <input
          className="instruction-form"
          type="text"
          name="instruction"
          id="f_instruction"
          autoComplete="off"
          value={this.state.instruction}
          placeholder="How do you cook your recipe?"
          size="50"
          onChange={this.handleInput}
        />
        <p></p>
        <input type="submit" value="Create A New Recipe" />
      </form>
      
        <div className="ingredient-form-container">
          <p></p>
            
              <ul>

              {this.state.ingredient_counter.map(item => {

               return <NewIngredientForm 
                recipe={this.state.new_recipe_object}
                />

              })}
      
            </ul>

  

            <button onClick={this.handleClick}>New Ingredient</button>
        </div>

      </div>
    );
  }

}

export default NewRecipeForm;

// t.integer "cuisine_id"
// t.string "name"
// t.string "image_url"
// t.string "instruction"
// t.integer "serving_size"
// t.integer "rating"
// t.integer "user_id"
// t.integer "time"

//component did mount grab all cuisine names
//make cuisine name drop down

