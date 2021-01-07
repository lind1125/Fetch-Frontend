import React, {useState, useEffect} from 'react';
import {getCurrentUser, logout} from '../services/auth.service'
import {getProfile, deleteProfile} from '../services/user.service'
import {Link} from 'react-router-dom'
import NotLoggedIn from './common/NotLoggedIn'

const Profile = (props) =>{
  const currentUser = getCurrentUser() // from the header info
  const [data,setData] = useState({})
  const [dogs, setDogs] = useState([])

  useEffect(()=>{
    if(currentUser){
      getProfile().then(response=>{
        setData(response.data)
        setDogs(response.data.dogs)
        console.log(response.data)
      })
    }
  },[])

  const deleteUser = () => {
    //console.log('deleting user')
    deleteProfile().then(data=>{
      //console.log('pushing to new page')
    })
    logout()
    props.history.push("/signup")
    window.location.reload()
  }

  const display = () => {
    // console.log(currentUser)
    return !currentUser ?
       <NotLoggedIn/>
     :  (
        <div className="container">
          <header className='jumbotron'>
            <h3>
              <strong>{currentUser.username}</strong>
              {data.username}
            </h3>
          </header>
          <p>
            <strong>
            Token:
          </strong>
          {currentUser.accessToken.substring(0,20)}...
          </p>
          <p>Username: {data.username}</p>
          <p>City: {data.location}</p>
          <p>Email: {data.email}</p>
          <p>Dogs:</p>
          {dogs?<ul>
            {dogs.map(dog=>{
              return <Link to={ { pathname:`/profile/dogs/${dog._id}`,state:{dog:dog} } } key={dog._id} >{dog.name} </Link>
            })}
          </ul>:<></>}

          <Link to="/profile/dogs/new" className="btn btn-primary">New Dog</Link>
          <form onSubmit={deleteUser}>
            <button className="btn btn-danger">Delete Account</button>
          </form>

          <Link to={{pathname:"/profile/edit",state:{email:data.email,location:data.location}}} className="btn btn-primary">Edit Profile</Link>

        </div>
      )
    }



  return display()
}

export default Profile;
