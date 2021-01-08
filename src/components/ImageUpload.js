import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
// Common componenets
import FormGroup from './common/FormGroup'
import BtnSpinner from './common/BtnSpinner'


const ImageUpload = () => {

  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false)


  return (
    <div>
      <Form>
        <FormGroup text='Upload a photo of your dog!'>
          <Input
            type="file"
            className="form-control"
            name="password"
            // value=
            // onChange={handleChange}
            // validations={[required]}
            />
        </FormGroup>
        <BtnSpinner loading={loading} text="Submit"/>
      </Form>
    </div>
  )
}

export default ImageUpload
