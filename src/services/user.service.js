import axios from 'axios'
import authHeader from '../utils/authHeader.utils'

const API_URL = "http://localhost:8080/"

/*
GET	 |   /profile	 |	retrieve user's profile
DELETE	 |   /profile	 |	delete user's profile
GET	 |  /api/test/user	 |	access User's content
GET	 | /api/test/admin	 |	access Admin's content
*/

// retrieve public content
// export const getPublicContent = () => {
//   return axios.get(API_URL+'all')
// }

// retrieve user's profile
export const getProfile = () => {
  console.log(authHeader())
  return axios.get(API_URL+'profile', {headers: authHeader()}) // HEADERS WITH AN S MONICA JFC
}

export const deleteProfile = () => {
  return axios.delete(API_URL+'profile',{headers:authHeader()})
}

// export const getAdminBoard = () => {
//   return axios.get(API_URL+'admin', {header: authHeader()})
// }
