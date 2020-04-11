import React from 'react';
import '../styles/App.css';
import Profile from './Profile.js'
import Search from './Search.js'
import MostPlayedChamps from './mostPlayedChamps.js';
import loading from '../images/teemo_dance.gif'
import exampleProfileData from '../example/exampleProfileData'
import exampleChampData   from '../example/exampleChampData'

//right now only works with NA accounts
//can set up a drop down menu for user to select region

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      firstSearch:true,
      loaded:false,
      currentProfile: exampleProfileData,
      currentChamps: exampleChampData
    }
  }

  componentDidMount() {

  }

  getProfile(search){
    let searchObj = {
      key : this.props.RIOT_API_KEY,
      search: search
    }

    this.props.searchForProfile (searchObj, (profile) =>
      this.setState({
        firstSearch:false,
        loaded:true,
        currentProfile: profile
      })
    );


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
