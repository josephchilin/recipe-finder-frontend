import React, { Component } from 'react';

class NewRecipeForm extends Component {

  state={
        name: ""
  }

  handleInput = (evt) => {

    this.setState({
      [evt.target.name]: evt.target.value
    })

  }

  handleSubmit = (evt) => {
    evt.preventDefault()

    fetch("http://localhost:3000/recipes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: this.state.name,
      })
    })
    .then(r => r.json())
    .then((newRecipe) => {
      this.props.addNewRecipeToArray(newRecipe);
    })

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="f_name">Name</label>
        <input
          type="text"
          name="foodName"
          id="f_name"
          autoComplete="off"
          value={this.state.foodName}
          onChange={this.handleInput}
        />
        <label htmlFor="f_type">Type</label>
        <input
          type="text"
          name="foodType"
          id="f_type"
          autoComplete="off"
          value={this.state.foodType}
          onChange={this.handleInput}
        />
        <input type="submit" value="Create A New Recipe" />
      </form>
    );
  }

}

export default NewRecipeForm;