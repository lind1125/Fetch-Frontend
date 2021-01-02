import React, {useState, useEffect} from 'react';
import {getCurrentUser} from '../services/auth.service'
import {getProfile} from '../services/user.service'

const Profile = () =>{
  const currentUser = getCurrentUser() // from the header info
  const [data,setData] = useState({})
  useEffect(()=>{
    getProfile().then(response=>{
      setData(response.data)
      console.log(response.data)
    })
  },[])
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


  </div>
);}

export default Profile;
