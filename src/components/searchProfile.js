import axios from 'axios';

var searchForProfile = ({search,key},cb) => {
  //only way i was able to access Riot api was using this proxy
    //https://github.com/Rob--W/cors-anywhere/
    var proxy = 'https://cors-anywhere.herokuapp.com/';
    var target = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${search}?api_key=${key}`;

    axios.get(proxy + target)
      .then((res) =>{
        console.log(res.data);
        cb(res.data);
      })
      .catch((error) => {
        if(error.response){
          console.log(error.response.data);
          console.log(error.response.response);
        }
      })

}

//var searchForChampions({})

export default searchForProfile;