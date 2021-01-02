import React from 'react';

const DogProfile = (props) => {
  console.log(props.location.state)
  return (

  <div>Dog profile page {props.location.state.dog.name}</div>
)};

export default DogProfile;
