import React from 'react';
import { useHistory } from 'react-router-dom'

const FourOFour = () => {
  const history = useHistory()
  return (
    <div class="container">

      <div class="row justify-content-center">
        <div class="col-md-4">

          <div>Page not found!</div>
          <button class="btn btn-warning" onClick={()=> history.goBack()}> Go Back! </button>
        </div>
      </div>
    </div>
  )
}

export default FourOFour;
