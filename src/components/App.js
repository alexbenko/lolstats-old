import React from 'react';
import '../styles/App.css';
import Profile from './Profile.js'
import Search from './Search.js'
import MostPlayedChamps from './mostPlayedChamps.js';
import loading from '../images/teemo_dance.gif'
import RIOT_API_KEY from '../config/rito.js';
import exampleProfileData from '../example/exampleProfileData'
import exampleChampData   from '../example/exampleChampData'

//right now only works with NA accounts
//can set up a drop down menu for user to select region

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      loaded:false,
      currentProfile: exampleProfileData,
      encryptedId : '',
      currentChamps: exampleChampData
    }
  }

/*  componentDidMount(){
    let proxy = 'https://cors-anywhere.herokuapp.com/';
    let target = `https://na1.api.riotgames.com/lol/champion-mastery/v4/scores/by-summoner/${this.state.currentProfile.id}?api_key=${RIOT_API_KEY}`;
    fetch(proxy + target)
      .then((response) => response.json())
      .then(result => {
        console.log(result);
        this.setState({currentChamps:result})
      });
  }
*/

  getProfile(search){
    let searchObj = {
      key : this.props.RIOT_API_KEY,
      search: search
    };

    this.props.searchForProfile (searchObj, (profile) =>

      this.setState({
        firstSearch:false,
        loaded:true,
        currentProfile: profile,
        encryptedId: profile['id']
      })
    );
   // console.log(this.state.encryptedId);

    /*let searchChamps ={
      encyptId: this.state.encryptedId,
      key: this.props.RIOT_API_KEY
    };

    console.log(searchChamps)

    this.props.searchForChamps (searchChamps, (champData) =>
      this.setState({
        currentChamps: champData
      })
    );
      */

  }

  render() {

    let {loaded} = this.state;


      return (
        <div>
          <h1>LOLStats</h1>
          <nav className="nav">
            <Search handleSearchChange={this.getProfile.bind(this)} />
          </nav>

          <div className ='prof'>
            <Profile profile={this.state.currentProfile} />
            <MostPlayedChamps champs={this.state.currentChamps}/>
          </div>

        </div>
      );


  };



}

export default App;
