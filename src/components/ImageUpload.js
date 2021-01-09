import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
// Common componenets
import FormGroup from './common/FormGroup'
// import BtnSpinner from './common/BtnSpinner'


const ImageUpload = () => {

  const url= 'https://api.cloudinary.com/v1_1/sfx818fetchapp/image/upload'
  const preset = 'nl04th0n'


  const [selectedImage, setSelectedImage] = useState('');
  const [previewSelection, setPreviewSelection] = useState('')


  const handleChange = e => {
    //sets image state to file selected by user
    const imageFile = e.target.files[0]
    previewImageFile(imageFile)
  }

  // previews the selected image
  const previewImageFile = (imageFile) => {
    const reader = new FileReader()
    reader.readAsDataURL(imageFile)
    reader.onloadend = () => {
      setPreviewSelection(reader.result)
    }
  }

  const handleSubmitImage = (e) => {
    console.log('submitting')
    e.preventDefault()
    if (!previewSelection) return
    uploadImage(previewSelection)
  }

  const uploadImage = async (image) => {
    const formData = new FormData();
  formData.append('file', image);
  formData.append('upload_preset', preset)
  try {
    const res = await axios.post(url, formData);
    console.log('RES DATA:', res.data)
    // const imageUrl = res.data.secure_url;
    // const image = await axios.post('http://localhost:3000/upload', {
    //   imageUrl
    // // });
    // setLoading(false);
    // setSelectedImage(image.data);
    // console.log(image.data)
  } catch (err) {
    console.error('ERROR HAPPENING', err);
  }
}
  

  return (
    <div className='card card-container'>
      <Form onSubmit={handleSubmitImage} >
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
        <button className='btn btn-primary btn-block' type='submit'>
          Upload Image
        </button>
      </Form>
        {previewImageFile && (
          <img 
          src={previewSelection}
          alt='' 
          className='img-thumbnail'
          />
          )}
    </div>
  )
}

export default ImageUpload
