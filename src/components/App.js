import React from 'react';
import '../styles/App.css';
import exampleProfileData from '../example/exampleProfileData';
import Profile from './Profile.js'
import Search from './Search.js'
import RIOT_API_KEY from '../config/rito.js';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      loaded:false,
      currentProfile: exampleProfileData
    }
  }

  componentDidMount() {
    fetch(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Daddy%20Thick?api_key=${RIOT_API_KEY}`)
     .then(res => res.json())
     .then(
       (result) =>{
         this.setState({
          loaded:true,
          currentProfile: result
         });
       },

       (fail) =>{
         console.log(fail);
        console.log("Failed!")
       }
    )
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
