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

  filteredRecipesArray = () => {
    let theArraytoReturn = this.state.recipeList

    if (this.state.searchTerm !== ""){
      theArraytoReturn = this.state.recipeList.filter((recipePOJO)=>{
        return (
          recipePOJO.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        )
      })
    } else if (this.state.searchTerm === ""){
      theArraytoReturn = []
    }
    
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
    console.log(this.state.searchTerm, "search")

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
          recipes={this.filteredRecipesArray()}  
        />
      </div>
    );
  } 


}

export default App;
