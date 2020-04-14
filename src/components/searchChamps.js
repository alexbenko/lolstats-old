//get request that needs accounts encrypted ID, and my API key
var searchForChampions = ({encryptedId,key}, cb) =>{

  var proxy = 'https://cors-anywhere.herokuapp.com/';
  var target = `https://na1.api.riotgames.com/lol/champion-mastery/v4/scores/by-summoner/${encryptedId}?api_key=${key}`;

  fetch(proxy + target)
  .then(res => res.json())
  .then(
    (result) =>{

      if(cb){
        console.log('Sucess!');
        console.log(result);
        cb(result);
      }

    },

    (fail) =>{

     console.log(fail);
    }
 )
}


export default searchForChampions