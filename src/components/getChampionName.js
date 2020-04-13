//converts the championid to a champion name
import champInfo from './champ.js'
//console.log(champInfo);
var getChampionName = (idPair) =>{
  let champName = champInfo[idPair];
  console.log(champName);
  return champName
};

getChampionName('875');
//console.log(getChampionName('555') )//should return Pyke
//export default getChampionName;