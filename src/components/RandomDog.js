import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card'


import {getCurrentUser} from '../services/auth.service'

const RandomDog = () => {
  const [dogs, setDogs] = useState([])
  useEffect(()=>{
    if(getCurrentUser()){
      return
    }
  })
  return (
  <div>{"Random Dogs Page"}</div>
);}
