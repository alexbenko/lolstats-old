//get request that needs accounts encrypted ID, and my API key
import axios from 'axios';
var searchForChampions = ({encryptedId,key}, cb) =>{
  //change the state inside the get request
  var proxy = 'https://cors-anywhere.herokuapp.com/';
  var target = `https://na1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${encryptedId}?api_key=${key}`;
  console.log("searchForChamps Id:" ,encryptedId);


  axios.get(proxy + target)
    .then(res => {
      console.log("Data from searchChamps: ",res.data);
      cb(res.data);
    })
    .catch((error) => {
      if(error.response){
        console.log(error.response.data);
        console.log(error.response.response);
      }
    })

}


export default searchForChampions