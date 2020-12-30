import axios from 'axios'
import authHeader from '../utils/authHeader.utils'

const API_URL = "http://localhost:8080/api/test/"

/*
GET	 |   /api/test/all	 |	retrieve public content
GET	 |  /api/test/user	 |	access User's content
GET	 | /api/test/admin	 |	access Admin's content
*/

// retrieve public content
export const getPublicContent = () => {
  return axios.get(API_URL+'all')
}

// retrieve user's content
export const getUserBoard = () => {
  return axios.get(API_URL+'user', {header: authHeader()})
}


export const getAdminBoard = () => {
  return axios.get(API_URL+'admin', {header: authHeader()})
}
