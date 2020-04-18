var searchForProfile = ({search,key},cb) => {
  //only way i was able to access Riot api was using this proxy
    //https://github.com/Rob--W/cors-anywhere/
    var proxy = 'https://cors-anywhere.herokuapp.com/';
    var target = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${search}?api_key=${key}`;

    fetch(proxy + target)
     .then(res => res.json())
     .then(
       (result) =>{
          console.log('Sucess!');
          cb(result);
       },

       (fail) =>{

        console.log('Search For Profile Failed:' , fail);
       }
    )
}

//var searchForChampions({})

export default searchForProfile;