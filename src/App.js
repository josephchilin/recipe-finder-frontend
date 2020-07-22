import React from 'react';
import './App.css';
import RecipeHeader from './RecipeHeader'
import RecipeContainer from './RecipeContainer'
import NewRecipeForm from './NewRecipeForm'


class App extends React.Component {
 
state = {
  recipeList: [],
  searchTerm: "",
  logged_in: false
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

  addNewRecipeToArray = (newRecipe) => {
    let copyOfList = [...this.state.recipeList, newRecipe]

    this.setState({
      recipeList: copyOfList
    })
  }

  changeSearchTerm = (termFromSearch) => {
    this.setState({
      searchTerm: termFromSearch
    })

  }
  render () {
    const {searchTerm, logged_in} = this.state
    // console.log(this.state)

    return (
      <div className="App">
        <RecipeHeader 
          searchTerm={searchTerm}
          changeSearchTerm={this.changeSearchTerm}
        />
        <p></p>

        {
        logged_in
        ?
        <NewRecipeForm
          addNewRecipeToArray={this.addNewRecipeToArray}
        />
          :
        "not logged in"
        }

        <RecipeContainer 
          recipes={this.returnsAnArray()}  
        />
      </div>
    );
  } 


}

export default App;
