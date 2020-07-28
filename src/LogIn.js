import React, { Component } from 'react';

class LogIn extends Component {

  state={
    name: "",
    password: "",
    userList: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/users")
    .then(resp => resp.json())
    // .then(console.log)
    .then(arrayOfUsers => {
      this.setState({
        userList: arrayOfUsers
      })
    })
  }

  handleInput = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
//===EXISTING USER OR CREATE NEW USER LOGIC
    let {name, userList} = this.state

    if (userList.some(user => user.name === name)){
      let existing_user = userList.find(user => user.name === name)
      console.log(existing_user, "NAME EXISTS")

      this.props.updateUser(existing_user)
      // console.log(userList)
    } else {

      fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name: this.state.name,
        })
      })
      .then(r => r.json())
      .then((user) => {
        this.props.updateUser(user);
      // console.log(user)
      })
    }
  }

  render() {
      // console.log(this.state, "login state")
    return (
      <form onSubmit={this.handleSubmit}>
        <label className="login-label" htmlFor="f_name">Name: </label>
        <input
            className="login-field"
            type="text"
            name="name"
            id="f_name"
            autoComplete="off"
            value={this.state.name}
            placeholder="Log In or Sign Up"
            size="20"
            onChange={this.handleInput}
        />
        <label className="login-label" htmlFor="f_password">Password: </label>
        <input
            className="login-field"
            type="password"
            name="password"
            id="f_password"
            autoComplete="off"
            value={this.state.password}
            placeholder="Password"
            size="20"
            onChange={this.handleInput}
        />
        <p></p>
        <input className="form-button" type="submit" value="Log In / Sign Up" />
      </form>
    );
  }

}

export default LogIn;

// component mount fetch get users
// if else logic in handlesubmit for username
// callback function to update state in app.js