import React from 'react';
import {NavLink, Redirect} from 'react-router-dom'


// let handleClick = (evt) => {
//     // evt.preventDefault()
//     console.log("LOG OUT CLICK")
// }

const NavBar = (props) => {
    // console.log(props, "NAVBAR PROPS")
  return(
    <ul className="nav">
      <li>
        <NavLink to="/home">Home</NavLink>
      </li>
        {
            props.logged_in
                ?
                <Redirect to="/home" />
                :
                <li>
                <NavLink to="/login">Login</NavLink>
                </li>
        }

        {
            props.logged_in
                ?
                <li>
                <NavLink to="/myrecipes">My Recipes</NavLink>
                </li>
                :
                null
        }
        {
            props.logged_in
                ?
                <li>
                <NavLink to="/newrecipe">Add New Recipe</NavLink>
                </li>
                :
                null
        }
                {/* {
            props.logged_in
                ?
                <li>
                <button onClick={handleClick()}>Log Out</button>
                </li>
                :
                null
        } */}
    </ul>
  )
};

export default NavBar;


// {
//     logged_in
//     ?
//     null
//     :
//     <LogIn
//     updateUser={this.updateUser}
//     />
//   }