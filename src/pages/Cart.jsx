import { faArrowLeft, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItemCart } from '../redux/slice/cartSlice'


function Cart() {
  const cartArray = useSelector((state)=>state.cartReducer)
  console.log(cartArray);
  const dispatch = useDispatch()

  return (
    <>
    {cartArray?.length>0?
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
            {cartArray?.map((item,index)=>(
              <tr>
              <td>{index+1}</td>
              <td>{item.title}</td>
              <td><img src={item.image} alt="teddy" width={160} height={160}/></td>
              <td>{item.price}</td>
              <td><button className='btn btn-danger' onClick={()=>dispatch(removeItemCart(item.id))}><FontAwesomeIcon icon={faTrash} /></button></td>
            </tr>))}
          </tbody>
        </table>
      </div>
      <div className="col-md-4 d-flex  justify-content-center" style={{height:'330px'}}>
        <div className='border shadow p-4 my-5'>
          <h3 className='text-summary text-center'>Cart Summary</h3>
          <h4 className='mt-3'>Total number of items : 3</h4>
          <h4>Total Price : $ 800</h4>
          <button className='btn btn-success w-100 mt-2'>Checkout</button>
        </div>
      </div>
      <div className="col-md-1"></div>
    </div>

    :

    <div style={{width:'100%', height:'70vh', display:'flex',justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
      <img src="https://w7.pngwing.com/pngs/201/463/png-transparent-empty-cart-illustration.png" alt="empty wishlist" height={400} width={400}/>
      <button className='btn btn-primary mt-4'><FontAwesomeIcon icon={faArrowLeft} className='me-2' />Back to Home</button>
    </div>}    
    </>
  )
}

export default Cart