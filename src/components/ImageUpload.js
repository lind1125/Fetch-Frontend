import React from 'react'
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import FormGroup from './common/FormGroup'


const ImageUpload = () => {

  

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
      </Form>
    </div>
  )
}

export default ImageUpload
