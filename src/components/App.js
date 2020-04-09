import React from 'react';
import '../styles/App.css';
import exampleProfileData from '../example/exampleProfileData';
import Profile from './Profile.js'
import Search from './Search.js'
import RIOT_API_KEY from '../config/rito.js';
//right now only works with NA accounts
//can set up a drop down menu for user to select region
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      loaded:false,
      currentProfile: exampleProfileData
    }
  }

  componentDidMount() {
    //only way i was able to access Riot api was using this proxy
    //https://github.com/Rob--W/cors-anywhere/
    var proxy = 'https://cors-anywhere.herokuapp.com/';
    var target = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Sneaky?api_key=${RIOT_API_KEY}`;
    fetch(proxy + target)
     .then(res => res.json())
     .then(
       (result) =>{
         console.log('Sucess!')
         console.log(result)
         this.setState({
          currentProfile: result
         });
       },

       (fail) =>{
         console.log('Failed: ',fail);

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
