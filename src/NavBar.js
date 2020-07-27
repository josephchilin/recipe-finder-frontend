import React from 'react';
import {NavLink} from 'react-router-dom'

const NavBar = (props) => {
    console.log(props.logged_in, "NAVBAR PROPS")
  return(
    <ul className="nav">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
        {
            props.logged_in
                ?
                null
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
                {
            props.logged_in
                ?
                <li>
                <NavLink to="/logout">Log Out</NavLink>
                </li>
                :
                null
        }
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