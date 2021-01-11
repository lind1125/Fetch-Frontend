import React, {useState} from 'react'
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
// Common componenets
import FormGroup from './common/FormGroup'
// CSS
import '../css/components/ImageUpload.css'


const ImageUpload = ({handler, preview, imageSubmit, previewState}) => {

  const [selectedImage, setSelectedImage] = useState('');
  
  return (
    <>
        <Form>
        <FormGroup text='Upload a photo of your dog!'>
          <Input
            type="file"
            name="image" 
            onChange={handler.bind(this)}
            value={selectedImage}
            validations={[required, vurl]}
            />
        </FormGroup>
        <button className='btn btn-primary btn-sm' type='button' onClick={imageSubmit.bind(this)}>
          Upload Image
        </button>
        {preview && (
          <img 
          src={previewState}
          alt='' 
          className='img-fluid rounded'
          />
          )}
      </Form>
    </>
  )
}

export default ImageUpload
