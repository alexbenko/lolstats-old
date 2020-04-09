import React from 'react';
import '../styles/App.css';
import exampleProfileData from '../example/exampleProfileData';
import Profile from './Profile.js'
import Search from './Search.js'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentProfile: exampleProfileData[0]
    }
  }


  render() {
    return (
      <div>
        <h1>LOLStats</h1>
        <nav className="nav">
          <Search />
        </nav>

        <div className ='prof'>
          <Profile profile={this.state.currentProfile} />
        </div>
      </div>
    );
  };



}

export default App;
