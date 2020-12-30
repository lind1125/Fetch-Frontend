import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import {getCurrentUser, logout} from '../../services/auth.service'
const Layout = (props) => {
  const [showAdminBoard, setShowAdminBoard] = useState(false)
  const [currentUser, setCurrentUser] = useState(undefined)

  useEffect(()=>{
    // get the cuurent user from the auth service
    const user = getCurrentUser();
    if (user){
      // set current user to the currentUser state
      setCurrentUser(user)
      // if user.roles has "ROLE_ADMIN" return true or false
      setShowAdminBoard(user.roles.includes('ROLE_ADMIN'))
    }

  },[])

  const logOut = () => {
    logout()
  }

  return (
  <div>
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">Cool Site</Link>
      <div className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to={"/home"} className="nav-link">Home</Link>
        </li>

        {
          showAdminBoard && (
            <li className="nav-item">
              <Link to={"/admin"} className="nav-link">Admin</Link>
            </li>
          )
        }
        {
          currentUser && (
            <li className="nav-item">
              <Link to={"/user"} className="nav-link">User</Link>
            </li>
          )
        }

      </div>

        {currentUser ?
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={'/profile'} className="nav-link">
                {currentUser.username}
              </Link>
            </li>
            <li className="nav-item">
              <a  href="/" className="nav-link" onClick={logOut}>Log out</a>
            </li>
          </div> : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={'/login'} className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/signup'} className="nav-link">
                  Signup
                </Link>
              </li>
          </div>)}

    </nav>
    <div className="container mt-3">
      {props.children}
    </div>
  </div>
)}

export default Layout;
