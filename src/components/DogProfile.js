import React, {useState,useEffect} from 'react';
import {getCurrentUser} from '../services/auth.service'
import {Link} from 'react-router-dom'
import {deleteUserDog, getUserDog} from '../services/dogs.service.js'
import NotLoggedIn from './common/NotLoggedIn'

// destructure props.location.state to have access on state
const DogProfile = (props) => {
  console.log(props.location.state)
  const currentUser = getCurrentUser() // from the header info, could probably pass down as props TODO
  const [dogdata, setDogdata] = useState(props.location.state && props.location.state.dog) // if accessing from the link, pull data from props.location.state.dog

  useEffect(()=>{
    // If user did not navigate to this page from their profile, make the get request
    if(!props.location.state){
      //make axios request to set dog data
      getUserDog(props.match.params.dogid).then(response=>{
        setDogdata(response.data)
      })
    }
  },[])

  const deleteDog = () => {
    deleteUserDog(dogdata._id)
    props.history.push("/profile")
    window.location.reload()
  }

  const sizeNumToText = (num) => {
    switch (num){
      case 1:
        return 'Small'
      case 2:
        return 'Medium'
      case 3:
        return 'Large'
      default:
        return undefined
    }

  }

  const display = () => {
    if(!currentUser){
      return <NotLoggedIn/>
    }
    if(dogdata){
      console.log(dogdata)
      return(
        <div><h1>Dog profile page {dogdata.name}</h1>
        <img className='img-fluid' alt="Your dog" src={dogdata.picture_url}/>
        <div className="jumbotron">
          <h3>About Me:</h3>
          <p>{dogdata.biography}</p>
          <p>Breed: <span className="orange-bold">{dogdata.breed}</span></p>
          <p>Temperament: <span className="orange-bold">{dogdata.temperament}</span></p>
          <p>Age: <span className="orange-bold">{dogdata.age}</span></p>
          <p>Size: <span className="orange-bold">{sizeNumToText(dogdata.size)}</span></p>

        </div>
        <button onClick={deleteDog} className="btn btn-danger">Delete {dogdata.name}</button>
        <Link to={{pathname:`/profile/dogs/${dogdata._id}/dogs`}} className="btn btn-primary">Find Some Doggie Friends</Link>
        <Link to={{pathname:`/profile/dogs/${dogdata._id}/matches`}} className="btn btn-primary">See Your Matches</Link>
        <Link to={{pathname:`/profile/dogs/${dogdata._id}/edit`, state:{...dogdata}}} className="btn btn-primary">Edit Profile</Link>

      </div>
      )
    } else {
      return <p>Please access dog from your profile page <Link to={"/profile"} className="nav-link">return home</Link></p>
    }
  }

  return display()
};

export default DogProfile;
