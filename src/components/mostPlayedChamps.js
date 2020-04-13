import React from 'react';

var MostPlayedChamps = ({champs}) => {
  return (
  <div className="everything">
    <div className="champTitle">
      <h3>Most Played Champs</h3>
    </div>

    <div className="champList">
      {champs.map((champ,index) => (

      <h3>{champ["championId"]}</h3>



      ))}
    </div>

   </div>
  );
};

export default MostPlayedChamps;