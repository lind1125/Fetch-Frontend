import {Switch, Route} from "react-router-dom"

// Icon library
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fas, far)

// Components imports
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Profile from './components/Profile'
import EditProfile from './components/EditProfile'
import DogProfile from './components/DogProfile'
import EditDog from './components/EditDog'
import DogForm from './components/DogForm'
import DogMatches from './components/DogMatches'

import RandomDogs from './components/RandomDogs'

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
        <Route exact path={'/profile/edit'} component={EditProfile}/>
        <Route exact path={'/profile/dogs/new'} component={DogForm}/>
        <Route path={'/profile/dogs/:dogid/dogs'} component={RandomDogs}/>
        <Route path={'/profile/dogs/:dogid/matches'} component={DogMatches}/>
        <Route path={'/profile/dogs/:dogid/edit'} component={EditDog}/>
        
        <Route path={'/profile/dogs/:dogid'} component={DogProfile}/>
      </Switch>
    </Layout>
  )
};

export default App;
