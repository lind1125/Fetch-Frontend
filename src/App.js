import {Switch, Route} from "react-router-dom"
// Components imports
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Profile from './components/Profile'
import DogProfile from './components/DogProfile'
// HOC which wraps around other Components
import Layout from './components/common/Layout'
// CSS imports
import "./css/App.css";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path={['/','/home']} component={Home}/>
        <Route exact path={'/login'} component={Login}/>
        <Route exact path={'/signup'} component={Signup}/>
        <Route exact path={'/profile'} component={Profile}/>
        <Route path={'/profile/dogs/:dogid'} render={({location})=><DogProfile location={location}/>}/>
      </Switch>
    </Layout>
  )
};

export default App;
