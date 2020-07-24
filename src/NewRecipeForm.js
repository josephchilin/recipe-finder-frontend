import React, { Component } from 'react';
// import NewIngredientForm from './NewIngredientForm'

class NewRecipeForm extends Component {

  state={
    name: "",
    image_url: "",
    serving_size: "",
    time: "",
    user_id: "",
    instruction: "",
    cuisine_id: 5,
    cuisineList: []
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
    console.log(this.state, "STATE BEFORE FETCH")
    evt.preventDefault()

    fetch("http://localhost:3000/recipes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        image_url: this.state.image_url,
        serving_size: this.state.serving_size,
        time: this.state.time,
        instruction: this.state.instruction,
        cuisine_id: this.state.cuisine_id,
        rating: null,
        user_id: this.state.user_id
      })
    })
    .then(r => r.json())
    .then((newRecipe) => {
      console.log(newRecipe, "AFTER FETCH NEW RECIPE PROMISE")
      this.props.addNewRecipeToArray(newRecipe);
    })

  }

  handleClick = (evt) => {
    console.log("clicked")
  }

  render() {
      console.log(this.state, "RECIPE FORM STATE")
    return (

      // <div className="recipe-form">

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


      // </div>
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

        // {/* <div className="ingredient-form-container"> */}
        //   {/* <button onClick={this.handleClick}>Add Ingredient</button> */}
        //   {/* {  */}
        //     {/* <ul> */}
        //       {/* <NewIngredientForm /> */}
        //     {/* </ul> */}
        //   {/* } */}
        // {/* </div> */}