import React from 'react'

function Cart() {
  return (
    <div className='container my-5 pt-5'>
      <h1 className="text-primary fw-bold">User's Cart</h1>
      <div className="row">
        <div className="col-lg-8 border shadow">
          <table className='table'>
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Image</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>...</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>VS Bombshell Perfume</td>
                <td><img width={'50px'} height={'50px'} src="https://victorias.lk/wp-content/uploads/2021/12/366725841_614265780879235_7084599823403240879_n-1.jpg" alt="" /></td>
                <td>
                  <div className="d-flex">
                    <button className='btn fs-1'>-</button>
                    <input type="text" style={{width:'50px'}} value={'10'} className='form-control' readOnly />
                    <button className='btn fs-1'>+</button>
                  </div>
                </td>
                <td>$20</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Cart