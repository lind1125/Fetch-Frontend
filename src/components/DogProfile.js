import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
import {deleteUserDog} from '../services/dogs.service.js'


// destructure props.location.state to have access on state
const DogProfile = (props) => {
  // TODO update to handle if the dog page accessed from elsewhere - i.e. if not props.location.state then do an axios request and render that.
  const [dogdata, setDogdata] = useState(props.location.state)
  useEffect(()=>{
    if(!props.location.state){
      console.log('no dog data')
      //make axios request to set dog data TODO
    }
  },[])

  const deleteDog = () => {
    console.log(props)
    deleteUserDog(dogdata.dog._id)
    props.history.push("/profile")
    window.location.reload()
  }

  const display = () => {
    if(dogdata){
      return(
        <div><h1>Dog profile page {dogdata.dog.name}</h1>
        <p>Breed: {dogdata.dog.breed}</p>
        <img alt="Your dog" src={dogdata.dog.picture_url}/>
        <button onClick={deleteDog} className="btn btn-danger">Delete {dogdata.dog.name}</button>
      </div>
      )
    } else {
      return <p>No dog <Link to={"/profile"} className="nav-link">return home</Link></p>
    }
  }

  return display()
};

export default DogProfile;
