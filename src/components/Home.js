import {Link} from 'react-router-dom'


const Home = () => {
  return (
    <div className='jumbotron'>
      <h1 className='display-5'>Welcome to Fetch!</h1>
      <h3 className='display-6'>Find Your Best Friend's New Best Friend</h3>
      <Link to={'/login'}  className="btn btn-primary">Log In</Link>
      <Link to={'/signup'} className="btn btn-primary">Sign Up</Link>
    </div>
  )
};

export default Home;
