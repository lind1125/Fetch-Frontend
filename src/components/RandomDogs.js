import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card'
import {getRandomDogs, likeDog, rejectDog} from '../services/dogs.service.js'
import NotLoggedIn from './common/NotLoggedIn'
import {getCurrentUser} from '../services/auth.service'
import '../css/components/RandomDogs.css'

const RandomDogs = (props) => {

  const [dogs, setDogs] = useState([])
  const [clicked, setClicked] = useState(false)
  const [lastDirection, setLastDirection] = useState()

  //initial useEffect for
  useEffect(()=>{
    if(getCurrentUser()){
      getRandomDogs(props.match.params.dogid).then(response=>{
        setDogs(response.data)
      }).catch(err=>console.log(err))
    }
  },[])

  const swiped = (direction, idToDelete) => {
    setClicked(false)
    console.log('removing: ' + idToDelete)
    setLastDirection(direction)
    // Left is reject, Right is accept :)
    if(direction==="left"){
      rejectDog(props.match.params.dogid,idToDelete).then(res=>{
        
      }).catch(err=>console.log(err))
    } else if (direction==="right"){
      likeDog(props.match.params.dogid,idToDelete).then(res=>{

      }).catch(err=>console.log(err))
    }
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
    setClicked(false)
  }

  const handleClick = () => {
    setClicked(!clicked)
  }

  const display = () => {
    return !getCurrentUser()
    ? <NotLoggedIn/>
    : (
      <div>
      <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
      <h1>Here are some potential pals:</h1>
      <div className='cardContainer'>
        {dogs.map((dog) =>
          <TinderCard className='swipe' key={dog.name} onSwipe={(dir) => swiped(dir, dog._id)} onCardLeftScreen={() => outOfFrame(dog.name)}>
            <div
              onClick={handleClick}
              style={ clicked ? {backgroundImage:' linear-gradient(to top, rgba(30, 75, 115, 1), rgba(255, 255, 255, 0.4)), url(' + dog.picture_url + ')'}: {backgroundImage: 'url(' + dog.picture_url + ')' }}
              className='tindercard'>
              {clicked?
                <div className="doginfo">
                  <h3>{dog.name}</h3>
                  <p>Breed: {dog.breed}</p>
                  <p>Age: {dog.age}</p>
                  <p>Temperament: {dog.temperament}</p>
                </div>
                :
                <div className="doginfo"><h3>{dog.name}</h3></div>
              }
            </div>
          </TinderCard>
        )}
      </div>
      {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
    </div>
    )
  }
  return display()
}

export default RandomDogs
