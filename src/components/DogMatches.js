import React, {useState,useEffect} from 'react';
import {getCurrentUser} from '../services/auth.service'
import { getMatches } from '../services/dogs.service'
import NotLoggedIn from './common/NotLoggedIn'

const DogMatches = (props) => {

  console.log(props.match.params.dogid)
  const currentUser = getCurrentUser()
  console.log('CURRENT USER: ', currentUser.id)
  const [matches, setMatches] = useState([])

  useEffect(()=>{
    // If user did not navigate to this page from their profile, make the get request
      //make axios request to set dog data
      getMatches(props.match.params.dogid).then(response=>{
        console.log(response.data)
        setMatches(response.data)
      })
  },[])

  const display = () => {
    
    if(!currentUser){
      return <NotLoggedIn/>
    }else {
      return (
        <div>
          <h2>DOG MATCHES!</h2>
          <p>{matches[0].name}</p>
          </div>
      )
    }
    
  }
return display()
}

export default DogMatches
