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
      loaded:false,
      currentProfile: exampleProfileData,
      encyptedId: null,
      currentChamps: exampleChampData
    }
  }

  //maybe componentDidUpdate??

  /*
  componentDidUpdate(prevState){
    console.log(prevState.currentProfile);
    if(this.state.currentProfile  !== prevState.currentProfile){
      this.setState({
        encyptedId: this.state.currentProfile["id"]
      });
    }

  }
*/
  getProfile(search){
    let searchObj = {
      key : this.props.RIOT_API_KEY,
      search: search
    };

    console.log('Profile:' ,searchObj);

    //https://stackoverflow.com/questions/45992682/calling-functions-after-state-change-occurs-in-reactjs
    this.props.searchForProfile (searchObj, (profile) =>
      this.setState({

        loaded:true,
        currentProfile: profile,

      }, () => {
          this.props.searchForChamps ({encryptedId: this.state.currentProfile["id"], key: this.props.RIOT_API_KEY}, (champData) =>
             this.setState({
              currentChamps: champData
             })
          );

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
