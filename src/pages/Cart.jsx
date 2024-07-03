import { faArrowLeft, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


function Cart() {
  return (
    <>
    <div className="row w-100">
      <div className="col-md-1"></div>
      <div className="col-md-6">
        <table className='table my-5 shadow'>
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Image</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>dummy</td>
              <td><img src="https://i5.walmartimages.com/asr/683488a1-eff8-4a0e-b076-9bb782a16c14.60bbfc5d285269f3a12eeb9c85dae585.jpeg" alt="teddy" width={160} height={160}/></td>
              <td>$ 50.99</td>
              <td><button className='btn btn-danger'><FontAwesomeIcon icon={faTrash} /></button></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="col-md-4 d-flex  justify-content-center">
        <div className='border shadow p-4 my-5'>
          <h3 className='text-summary text-center'>Cart Summary</h3>
          <h4 className='mt-3'>Total number of items : 3</h4>
          <h4>Total Price : $ 800</h4>
          <button className='btn btn-success w-100 mt-2'>Checkout</button>
        </div>
      </div>
      <div className="col-md-1"></div>
    </div>

    <div style={{width:'100%', height:'70vh', display:'flex',justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
      <img src="https://w7.pngwing.com/pngs/201/463/png-transparent-empty-cart-illustration.png" alt="empty wishlist" height={400} width={400}/>
      <button className='btn btn-primary mt-4'><FontAwesomeIcon icon={faArrowLeft} className='me-2' />Back to Home</button>
    </div>    
    </>
  )
}

export default Cart