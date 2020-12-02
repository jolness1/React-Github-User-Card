import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  state = {
    userInfo: [],
    followers:[],
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/jolness1')
    .then((res) => {
      this.setState({
        userInfo:res.data 
      });
    })
    .catch(err=> console.log(err));
  }
  
  
  onSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.input);
    axios.get(`https://api.github.com/users/${this.state.input}`)
    .then((res) =>{
      console.log(res);
      this.setState({
        userInfo:res.data
      });
    })
    .catch(err => console.log(err));
  }

  render() {
    return(
      <div className="card1">
        <h1>GitHub User Card!</h1>
         <form onSubmit={this.onSubmit}>
                <label>
                    Search for Another User:
                    <br></br>
                    <input 
                        // value={this.state.input}
                        placeholder="Search for Dev"
                        onChange={this.onChange}
                    />
                </label>
                <button>Search</button>
            </form>
    <div>
    <p>Name:{this.state.userInfo.name}</p>
    <a className="links" href={`https://github.com/${this.state.userInfo.login}`}>Click for {this.state.userInfo.login}'s Profile</a>
    <p>Bio:{this.state.userInfo.bio}</p>
    <p>Location:{this.state.userInfo.location}</p>
    <p>Followers:{this.state.userInfo.followers}</p>
    <p>Following:{this.state.userInfo.following}</p>
    <a className="links" href={`https://github.com/${this.state.userInfo.login}?tab=repositories`}> Repositories</a>
    <img className="profileImg" width="250" src={this.state.userInfo.avatar_url} alt="Profile"/>
    </div>

      </div>
    )
  }

}

export default App;
