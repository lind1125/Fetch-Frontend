import React from 'react';
// destructure props.location.state to have access on state
const DogProfile = ({location:{state}}) => {

  return (

  <div><h1>Dog profile page {state.dog.name}</h1>
  <p>Breed: {state.dog.breed}</p>
  <img alt="Your dog" src={state.dog.picture_url}/></div>
)};

export default DogProfile;
