//get request that needs accounts encrypted ID, and my API key
var searchForChampions = ({encryptedId,key}, cb) =>{
  //change the state inside the get request
  var proxy = 'https://cors-anywhere.herokuapp.com/';
  var target = `https://na1.api.riotgames.com/lol/champion-mastery/v4/scores/by-summoner/Hc3IBWqw6ZCPpcPbcTax0Qb88T6RBshh2jcHnfwzqHH5k2c?api_key=${key}`;
  console.log("Fetch:" ,encryptedId);
  fetch(proxy + target)
  .then(res => res.json())
  .then(
    (result) =>{
      console.log('Sucess!');
      cb(result);
    },
    (fail) =>{

     console.log(fail);
    }
 )
}


export default searchForChampions