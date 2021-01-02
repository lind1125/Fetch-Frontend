import React, {useState, useEffect} from 'react';
import {getCurrentUser, logout} from '../services/auth.service'
import {getProfile, deleteProfile} from '../services/user.service'

const Profile = (props) =>{
  const currentUser = getCurrentUser() // from the header info
  const [data,setData] = useState({})
  useEffect(()=>{
    getProfile().then(response=>{
      setData(response.data)
      console.log(response.data)
    })
  },[])
  const deleteUser = () => {
    deleteProfile().then(data=>{
      logout()
      props.history.push("/")
      window.location.reload()
    })
  }
  return (
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
    <form onSubmit={deleteUser}>
      <button>Delete Account</button>
    </form>
  </div>
);}

export default Profile;
