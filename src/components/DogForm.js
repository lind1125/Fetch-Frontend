import React, {useState, useRef} from 'react';
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import CheckButton from 'react-validation/build/button'
import validator from 'validator';
// Common components we made
import FormGroup from './common/FormGroup'
import BtnSpinner from './common/BtnSpinner'
import NotLoggedIn from './common/NotLoggedIn'
// helpers
import {resMessage} from '../utils/functions.utils'
import {getCurrentUser} from '../services/auth.service'
import {newUserDog} from '../services/dogs.service.js'


const DogForm = (props) => {
  const [data,setData] = useState(
    {
      name:"",
      picture_url:"",
      biography:"",
      breed:"",
      temperament:"",
      age:"",
      size:"",
      min_age:"",
      max_age:"",
      min_size:"",
      max_size:"",
      }
    )

  const handleChange = (e) =>{
    setData({...data,[e.target.name]:e.target.value})
  }



  const display = () => {
    return !getCurrentUser() ?
    <NotLoggedIn/>
    : (
      <div></div>
    )
  }
  return display()
}

export default DogForm;
