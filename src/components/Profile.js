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
        <h3>
        <strong>{currentUser.username}</strong>
        </h3>
          <header className='jumbotron'>
          <p>City: {data.location}</p>
          <p>Email: {data.email}</p>
          </header>
          
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

          <Link to={{pathname:"/profile/edit",state:{email:data.email,location:data}}} className="btn btn-primary">Edit Profile</Link>

        </div>
      )
    }



  return display()
}

export default Profile;
