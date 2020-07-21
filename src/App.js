import React from 'react';
import './App.css';
import RecipeContainer from './RecipeContainer'


class App extends React.Component {
 
state = {
  recipeList: [],
  searchTerm: ""
}

returnsAnArray = () => {
  let theArraytoReturn = this.state.recipeList

  return theArraytoReturn
}

componentDidMount() {
  fetch("http://localhost:3000/recipes")
  .then(resp => resp.json())
  // .then(console.log)
  .then(arrayOfRecipes => {
    this.setState({
      recipeList: arrayOfRecipes
    })
  })
}


  render () {
    const {recipeList, searchTerm} = this.state
    // console.log(this.state)

    return (
      <div className="App">
        <RecipeContainer 
          recipes={this.returnsAnArray()}  
        />
      </div>
    );
  } 


}

export default App;
