import axios from 'axios'
import {setItem, getItem, removeItem} from '../utils/localStorage.utils'
const API_URL = "http://localhost:8080/auth/"

/*
POST |	/api/signup |	signup new account
POST |	/api/signin |	login an account
*/


//function to register user
export const register = (username, email, password, location) => {
  return axios.post(API_URL+'signup', {
    username,
    email,
    password,
    location
  })
}

// login the user
export const login = (username, password) => {
  return axios.post(API_URL+'signin', {
    username,
    password
  })
  .then((response) => {
    // if we got an access token back
    if(response.data.accessToken){
      setItem("user", response.data)
    }
    return response.data
  })
}

export const logout = () => {
  return removeItem("user")
}

// get the current user
export const getCurrentUser = () => {
  return getItem('user')
}
