import React from 'react';
import './App.css';
// import RecipeHeader from './RecipeHeader'
import SearchBar from './SearchBar'
import RecipeContainer from './RecipeContainer'
import NewRecipeForm from './NewRecipeForm'
import EditRecipeForm from './EditRecipeForm'
import LogIn from './LogIn'
import NavBar from './NavBar'
import MyRecipes from './MyRecipes'
import {Switch, Route, Redirect} from 'react-router-dom'
import {withRouter} from 'react-router-dom'


class App extends React.Component {
 
  state = {
    recipeList: [],
    searchTerm: "",
    logged_in: false,
    user_id: "",
    user_name: "",
    currentRecipe: ""
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

  filteredRecipesArray = (routerProps) => {
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

  updateRecipeArray = () => {
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

  deleteRecipeFromArray = (id) => {
    let copyOfList = this.state.recipeList.filter((recipe) => {
      return recipe.id !== id 
    })

    this.setState({
      recipeList: copyOfList
    })
  }

  editRecipeFunction = (recipe) => {
    // console.log(recipe, "APP EDIT RECIPE FUNCTION RECIPE")
    // console.log(this.props, "EDIT RECIPE FUNCTION PROPS")
    this.setState({
      currentRecipe: recipe
    })
      this.props.history.push('/editrecipe')

  }

  changeSearchTerm = (termFromSearch) => {
    this.setState({
      searchTerm: termFromSearch
    })
  }

  updateUser = (user) => {
    this.setState({
      user_id: user.id,
      user_name: user.name,
      logged_in: true
    })
  }
  renderNewRecipeForm = (routerProps) => {
    const {user_id} = this.state
    return <NewRecipeForm 
    addNewRecipeToArray={this.addNewRecipeToArray}
    updateRecipeArray={this.updateRecipeArray}
    user_id={user_id}
    />
  }

  renderEditRecipeForm = (routerProps) => {
    const {user_id, currentRecipe} = this.state
    return <EditRecipeForm 
    addNewRecipeToArray={this.addNewRecipeToArray}
    updateRecipeArray={this.updateRecipeArray}
    currentRecipe={currentRecipe}
    user_id={user_id}
    />
  }

  renderMyRecipes = (routerProps) => {
    const {logged_in, user_name, user_id, recipeList} = this.state
    
    return <MyRecipes 
    deleteRecipeFromArray={this.deleteRecipeFromArray}
    editRecipeFunction={this.editRecipeFunction}
    recipeList={recipeList}
    logged_in={logged_in}
    user_id={user_id}
    user_name={user_name}
    />
  }

  renderHome = (routerProps) => {
    const {searchTerm, logged_in, user_id} = this.state
    return <div>
      <SearchBar 
        searchTerm={searchTerm}
        changeSearchTerm={this.changeSearchTerm}
      />
      <RecipeContainer 
        recipes={this.filteredRecipesArray()}  
        deleteRecipeFromArray={this.deleteRecipeFromArray}
        editRecipeFunction={this.editRecipeFunction}
        logged_in={logged_in}
        user_id={user_id}
      />
    </div>
  }

  renderLogIn = (routerProps) => {

    return <LogIn
    updateUser={this.updateUser}
    />
  }

  logOut = () => {
    this.setState({
      logged_in: false
    })
  }



  render () {
    const {logged_in, user_name} = this.state
    // console.log(this.state, "APP STATE")

    return (
      <div className="App">
        <NavBar 
        logged_in={logged_in}
        logOut={this.logOut}
        />
        <p></p>
        <h1 className="app-title">ReciPLS</h1>
        <p></p>
        {
          logged_in
          ?
          <p><b>Welcome {user_name}!</b></p> //ADD LOGOUT BUTTON AND FUNCTION TO SET STATE TO LOGGED OUT
          :
          null
        }
        <Switch>
          <Route path='/newrecipe' render={this.renderNewRecipeForm} />
          <Route path='/myrecipes' render={this.renderMyRecipes} />
          <Route path='/editrecipe' render={this.renderEditRecipeForm} />
          <Route path='/login' render={this.renderLogIn} />
          <Route path='/home' render={this.renderHome} />
        </Switch>

        {/* <p></p>
        <RecipeContainer 
          recipes={this.filteredRecipesArray()}  
          deleteRecipeFromArray={this.deleteRecipeFromArray}
          logged_in={logged_in}
          user_id={user_id}
        /> */}
      </div>
    );
  } 


}

export default withRouter(App);


// clean up ingredient iteration in recipe component
// clean up UX for new ingredient in new recipe form
    //make sure new recipe form passes down recipe id to new ingredient form
// make routes

// filter by ingredient