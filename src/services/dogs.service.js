import axios from 'axios'
import authHeader from '../utils/authHeader.utils'

const API_URL = "http://localhost:8080/"

export const deleteUserDog = (dogid) => {
  console.log(API_URL+'profile/dogs'+dogid)
  return axios.delete(API_URL+'profile/dogs/'+dogid,{headers:authHeader()})
}
