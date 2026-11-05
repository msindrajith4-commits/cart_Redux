import { height } from '@fortawesome/free-brands-svg-icons/fa11ty'
import React from 'react'

function View() {
  return (
    <div className='container my-5'>
    <div style={{height:"80vh"}} className='row'></div>
    <div className='col-lg-6'>
        <img className='img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSextmS5mkqPz_akBulw5BBjgRDtgt1oFGrAneUb6rtoQ&s=10" alt="Product" />

        <div className='d-flex justify-content-evenly mt-5'>

            <button className='btn btn-info'>ADD TO WISHLIST</button>
            <button className='btn btn-info'>ADD TO CART</button>

        </div>
        <div className='col-lg-6'>
          <h3 className='fw-bold'>Title</h3>
          <h2 className='fw-bold'>$ 30</h2>
          <h4 className='fw-bold'>Brand : </h4>
          <h4 className='fw-bold'>Category : </h4>
          <h4 className='fw-bold'>Description : </h4>
          <h5 className='fw-bold'>Client Reviews</h5>
          <div className='border rounded p-2 shadow my-5'>
            <p> <span className='fw-bolder'>Name :</span> Message</p>
            <p>Rating : 5 <FontAwesomeIcon icon={faStar} className='text-warning' /> 
</p>
          </div>
        </div>
      

    </div>
</div>
  )
}

export default View
