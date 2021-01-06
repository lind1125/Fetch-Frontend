import React, {useState , useRef} from 'react';
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import CheckButton from 'react-validation/build/button'
import validator from 'validator';
// Common components we made
import FormGroup from './common/FormGroup'
import BtnSpinner from './common/BtnSpinner'

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

  const [data,setData] = useState({email:props.location.state.email, location:props.location.state.location})
  const [message, setMessage] = useState()
  const [successful, setSuccessful] = useState(false)

  const handleChange = (e) =>{
    setData({...data,[e.target.name]:e.target.value})
  }

  const handleEditProfile = () => {

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
            <Input
              type="location"
              className="form-control"
              name="location"
              value={data.location}
              onChange={handleChange}
              validations={[required]}
            />
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
