import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
      this.state = {
      userInfo:[],
      userName: ""
    }
  }
  
  handleChanges = e => {
    this.setState({
      ...this.state,
      userName: e.target.value
    })
  }

  fetchUser = () => {
    axios
      .get(`https://api.github.com/users/${this.state.userName}`)
      .then(res => {
        this.setState({
          ...this.state,
          userInfo: res.data
        });
      })
      .catch(err => console.log(err));
  }


  componentDidMount() {
    axios
      .get('https://api.github.com/users/jolness1')
      .then(res => {
        this.setState({
          userInfo: res.data
        })
        console.log(res.data)
      })
  }
  //axios request
  //componentDidMount
  //componentDidUpdate

  render() {
      return(
    <div className="wrapper">
      <div className='search'>
        <h1>Github User Card</h1>
        <p>Search for User:</p>
        <input
          placeholder="Dev Username"
          value={this.state.userName}
          type="text"
          onChange={this.handleChanges}
          />
        <button onClick={this.fetchUser}>Search</button>
      </div>
      <div className="usercard">
        <h2>User: {this.state.userInfo.login}</h2>
        <p>Name: {this.state.userInfo.name}</p>
        <p>Repositories: {this.state.userInfo.public_repos}</p>
        <p><a className="noline" href={`http://twitter.com/${this.state.userInfo.twitter_username}`} >Click for Twitter</a></p>
        <img src={this.state.userInfo.avatar_url} alt="Profile Photo" width='20%'/>
      </div>
    </div>
    )
  }



}
export default App;
