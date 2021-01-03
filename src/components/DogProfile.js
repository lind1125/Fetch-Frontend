import React, {useState,useEffect} from 'react';
import {getCurrentUser} from '../services/auth.service'
import {Link} from 'react-router-dom'
import {deleteUserDog, getUserDog} from '../services/dogs.service.js'
import NotLoggedIn from './common/NotLoggedIn'

// destructure props.location.state to have access on state
const DogProfile = (props) => {
  // TODO check if user logged in, if not display link to login/signup
  const currentUser = getCurrentUser() // from the header info
  const [dogdata, setDogdata] = useState(props.location.state)

  useEffect(()=>{
    if(!props.location.state){
      console.log('no dog data')
      //make axios request to set dog data
      getUserDog(props.match.params.dogid).then(response=>{
        console.log(response.data)
        setDogdata(response.data)
      })
    } else{
      setDogdata(props.location.state.dog)
    }
  },[])

  const deleteDog = () => {
    console.log(props)
    deleteUserDog(dogdata.dog._id)
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
