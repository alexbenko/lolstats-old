import React from 'react';
import getChampionName from './getChampionName.js'

var MostPlayedChamps = ({champs}) => {
  return (
  <div className="everything">
    <div className="champTitle">
      <h3>Most Played Champs</h3>
    </div>

    <div className="champList">


      {champs.map((champ) => {

        return <h3>{getChampionName(champ["championId"])}</h3>

      })}
    </div>

    </div>
  );
};

export default MostPlayedChamps;