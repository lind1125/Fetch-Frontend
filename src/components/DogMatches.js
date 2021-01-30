import React, {useState,useEffect} from 'react';
import {getCurrentUser} from '../services/auth.service'
import { getMatches } from '../services/dogs.service'
import NotLoggedIn from './common/NotLoggedIn'
import {Link} from 'react-router-dom'


const DogMatches = (props) => {

  const dogId = props.match.params.dogid
  const currentUser = getCurrentUser()
  console.log('CURRENT USER: ', currentUser.id)
  const [matches, setMatches] = useState([])

  useEffect(()=>{
      getMatches(dogId).then(response=>{
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
          {matches.map(dog => {
           return ( <div>
              <img src={dog.picture_url} height='300px' />
              <p>{dog.name}</p>
            </div>
           )
          })}
          <Link to={{pathname:`/profile/dogs/${dogId}`}} className="btn btn-primary">Back</Link>
        </div>
    )
  }
}
return display()
}

export default DogMatches
