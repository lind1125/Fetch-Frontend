import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom'

// destructure props.location.state to have access on state
const DogProfile = ({location:{state}}) => {
  // TODO update to handle if the dog page accessed from elsewhere - i.e. if not props.location.state then do an axios request and render that.
  const [dogdata, setDogdata] = useState(state)
  useEffect(()=>{
    if(!state){
      console.log('no dog data')
      //make axios request to set dog data TODO
    }
  },[])

  const display = () => {
    if(dogdata){
      return(
        <div><h1>Dog profile page {dogdata.dog.name}</h1>
        <p>Breed: {dogdata.dog.breed}</p>
        <img alt="Your dog" src={dogdata.dog.picture_url}/></div>
      )
    } else {
      return <p>No dog <Link to={"/profile"} className="nav-link">return home</Link></p>
    }
  }

  return display()
};

export default DogProfile;
