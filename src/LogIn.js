import React, { Component } from 'react';

class LogIn extends Component {

  state={
    name: "",
    password: ""
  }

  handleInput = (evt) => {

    this.setState({
      [evt.target.name]: evt.target.value
    })

  }

  handleSubmit = (evt) => {
    evt.preventDefault()

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

  render() {
    //   console.log(this.state)
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
        <input type="submit" value="Log In / Sign Up" />
      </form>
    );
  }

}

export default LogIn;

// component mount fetch get users
// if else logic in handlesubmit for username