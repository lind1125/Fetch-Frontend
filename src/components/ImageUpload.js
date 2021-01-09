import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
// Common componenets
import FormGroup from './common/FormGroup'
import BtnSpinner from './common/BtnSpinner'


const ImageUpload = () => {

  const [selectedImage, setSelectedImage] = useState('');
  const [previewSelection, setPreviewSelection] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = e => {
    //sets image state to file selected by user
    const imageFile = e.target.files[0]
    previewSelectedFile(imageFile)
  }

  // previews the selected image
  const previewSelectedFile = (imageFile) => {
    const reader = new FileReader()
    reader.readAsDataURL(imageFile)
    reader.onloadend = () => {
      setPreviewSelection(reader.result)
    }
  }

  return (
    <div className='card card-container'>
      <Form>
        <FormGroup text='Upload a photo of your dog!'>
          <Input
            type="file"
            className="form-control"
            name="image" 
            onChange={handleChange}
            value={selectedImage}
            // validations={[required]}
            />
        </FormGroup>
        <BtnSpinner loading={loading} text="Submit"/>
      </Form>
      {previewSelectedFile && (
        <img 
        src={previewSelection}
        alt='' 
        className='img-fluid'
        />
      )}
    </div>
  )
}

export default ImageUpload
