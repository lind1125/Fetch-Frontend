import axios from 'axios'
import authHeader from '../utils/authHeader.utils'

const API_URL = "http://localhost:8080/"

export const deleteUserDog = (dogid) => {
  return axios.delete(API_URL+'profile/dogs/'+dogid,{headers:authHeader()})
}


export const getUserDog = (dogid) => {
  return axios.get(API_URL+'profile/dogs/'+dogid,{headers:authHeader()})
}


export const newUserDog = (dogData) => {
  //console.log(...dogData)
  //console.log({dogData})
  return axios.post(API_URL+'profile/dogs',{...dogData},{headers:authHeader()})
}
