import {Link} from 'react-router-dom'
import {getCurrentUser} from '../services/auth.service'
import NotLoggedIn from './common/NotLoggedIn'


const Home = () => {
  
  const display = () => {
    return !getCurrentUser() ?
      <div className='jumbotron d-flex flex-column align-items-center w-50 px-2 mx-auto'>
        <h1 className='display-5'>Welcome to Fetch!</h1>
        <h3 className='display-6'>Find Your Best Friend's New Best Friend</h3>
        <div class="d-flex justify-content-around px-2">
        <Link to={'/login'}  className="btn btn-primary mx-3">Log In</Link>
        <Link to={'/signup'} className="btn btn-primary mx-3">Sign Up</Link>
        </div>
      </div>
    : (
      <div className='jumbotron d-flex flex-column align-items-center w-50 px-2 mx-auto'>
      <h1 className='display-5'>Welcome Back!</h1>
      <div class="d-flex justify-content-around px-2">
      <Link to={'/profile'}  className="btn btn-primary mx-3">Go to Your Profile</Link>
      </div>
    </div>
  )
}

return display()
}


export default Home;
