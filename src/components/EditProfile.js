import React, {useState , useRef} from 'react';
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import Select from 'react-validation/build/select'
import CheckButton from 'react-validation/build/button'
import validator from 'validator';
// Common components we made
import FormGroup from './common/FormGroup'
import BtnSpinner from './common/BtnSpinner'

import {resMessage} from '../utils/functions.utils'
import { editProfile } from '../services/user.service'

const required = (value) => {
  if(!value){
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    )
  }
}

const email = (value) => {
  if (!validator.isEmail(value)) {
    return (<div className="alert alert-danger" role="alert">
      `${value} is not a valid email.`
    </div>
      )
  }
};


const EditProfile = (props) => {
  const form = useRef()
  const checkBtn = useRef()

  const [data,setData] = useState({email:props.location.state?props.location.state.email:"", location:props.location.state?props.location.state.location:""})
  const [message, setMessage] = useState()
  const [successful, setSuccessful] = useState(false)

  const handleChange = (e) =>{
    setData({...data,[e.target.name]:e.target.value})
  }

  const handleEditProfile = (e) => {
    e.preventDefault()
    setMessage("")
    setSuccessful(false)
    // use the library to validate all fields on the form
    form.current.validateAll()
    if(checkBtn.current.context._errors.length === 0){
      // register the user
      editProfile(data.email, data.location).then((response)=>{
        setMessage('Successfully edited user')
        setSuccessful(true)
        setTimeout(()=>{
          props.history.push('/profile')

        },200)

      },
      (error)=>{

          setSuccessful(false)
          setMessage(resMessage(error))
        }
      )
    } else {
      setSuccessful(false)
    }
  }

  return (
    <div className="col-md-12">
    <h1> Edit your profile </h1>
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />
        <Form onSubmit={handleEditProfile} ref={form}>
          <FormGroup text='email'>
            <Input
              type="text"
              className="form-control"
              name="email"
              value={data.email}
              onChange={handleChange}
              validations={[required, email]}
            />
          </FormGroup>

          <FormGroup text='location'>
            <Select  name='location' className="form-control" value={data.location} onChange={handleChange}validations={[required]}>
              <option value='San Francisco, SF'>San Francisco</option>
              <option value='New York, NY'>New York</option>
              <option value='Portland, OR'>Portland</option>
              <option value='Houston, TX'>Houston</option>
            </Select>

          </FormGroup>
          <BtnSpinner loading={successful} text="Edit Profile"/>

         {message && (
             <div className='form-group'>
                 <div className={successful ? 'alert alert-success':'alert alert-danger'} role='alert'>
                     {message}
                 </div>
             </div>
         )}
         <CheckButton style={{display:'none'}} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
}


export default EditProfile;
