import React from 'react';

var Profile = (props) => (

<div className="prof">
  <h3>Summoner:  {props.profile.name}</h3>
  <h3>{`Level: ${props.profile.summonerLevel}`}</h3>
</div>

);


export default Profile