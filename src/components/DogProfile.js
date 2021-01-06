import React, {useState,useEffect} from 'react';
import {getCurrentUser} from '../services/auth.service'
import {Link} from 'react-router-dom'
import {deleteUserDog, getUserDog} from '../services/dogs.service.js'
import NotLoggedIn from './common/NotLoggedIn'

// destructure props.location.state to have access on state
const DogProfile = (props) => {

  const currentUser = getCurrentUser() // from the header info, could probably pass down as props TODO
  const [dogdata, setDogdata] = useState(props.location.state)

  useEffect(()=>{
    // If user did not navigate to this page from their profile, make the get request
    if(!props.location.state){
      //make axios request to set dog data
      getUserDog(props.match.params.dogid).then(response=>{
        setDogdata(response.data)
      })
    } else{
      setDogdata(props.location.state.dog)
    }
  },[])

  const deleteDog = () => {
    deleteUserDog(dogdata._id) 
    props.history.push("/profile")
    window.location.reload()
  }

  const display = () => {
    if(!currentUser){
      return <NotLoggedIn/>
    }
    if(dogdata){
      return(
        <div><h1>Dog profile page {dogdata.name}</h1>
        <p>Breed: {dogdata.breed}</p>
        <img alt="Your dog" src={dogdata.picture_url}/>
        <button onClick={deleteDog} className="btn btn-danger">Delete {dogdata.name}</button>
      </div>
      )
    } else {
      return <p>Please access dog from your profile page <Link to={"/profile"} className="nav-link">return home</Link></p>
    }
  }

  return display()
};

export default DogProfile;
