import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card'
import {getRandomDogs, likeDog, rejectDog} from '../services/dogs.service.js'
import NotLoggedIn from './common/NotLoggedIn'
import {getCurrentUser} from '../services/auth.service'

const RandomDogs = (props) => {
  const [dogs, setDogs] = useState([])

  //initial useEffect for
  useEffect(()=>{
    if(getCurrentUser()){
      getRandomDogs(props.match.params.dogid).then(response=>{
        setDogs(response.data)
      }).catch(err=>console.log(err))
    }
  },[])

  // Left is reject, Right is accept :)

  const display = () => {
    return !getCurrentUser()
    ? <NotLoggedIn/>
    : (
      <div>here are some random dogs </div>
    )
  }
  return display()
}

export default RandomDogs
