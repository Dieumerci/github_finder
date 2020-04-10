import React, { Component } from 'react';
import Profile from './components/Profile';
import Search from './components/Search';
import 'whatwg-fetch';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Dieumerci',
      userData: [],
      userRepos: [],
      perPage: 7
    }
  }

  // Get User's profile information from github API
  getUserData = () => {
    fetch('http://api.github.com/users/' + this.state.username)
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response
      })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState(
          { userData: json })
      })
      .catch(function (error) {
        console.log('There was a problem with fetch operation:' + error.message)
      })
  }
  // Get User's repositories Github API call
  getUserRepos = () => {
    fetch('http://api.github.com/users/' + this.state.username + '/repos?per_page=' + this.state.perPage + '&sort=created')
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response
      })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState(
          { userRepos: json })
      })
      .catch(function (error) {
        console.log('There was a problem with fetch operation:' + error.message)
      })
  }

  handleFormSubmit = (username) => {
    this.setState({ username }, function () {
      this.getUserData();
      this.getUserRepos();
    })
  }

  componentDidMount() {
    this.getUserData();
    this.getUserRepos();
  }

  render() {
    return (
      <div>
        
        <Search onFormSubmit={this.handleFormSubmit.bind(this)} />
        <div className="container">
          <Profile {...this.state} />
        </div>
      </div>
    );
  }
}

export default App;