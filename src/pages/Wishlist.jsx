import { faArrowLeft, faCartShopping, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist } from '../redux/slice/wishlistSlice';
import { addToCart } from '../redux/slice/cartSlice';


function Wishlist() {

  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  console.log(wishlistArray);

  const dispatch = useDispatch()

  const handlecart = (item)=>{
    dispatch(addToCart(item))
    dispatch(removeFromWishlist(item.id))
  }


  return (
    <>
    { wishlistArray?.length>0?
      <Row className='w-100 m-2 p-3'>
      { wishlistArray?.map((item)=>(
        <Col sm={12} md={4} lg={3} className='mt-3 d-flex justify-content-center p-3'>
        <Card style={{ width: '100%' }} className='border shadow rounded'>
        <Card.Img variant="top" src={item.image} className='w-100' style={{height:'300px'}}/>
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
          <p>Price is :${item.price}</p>
          </Card.Text>
          <div className='d-flex  justify-content-between'>
            <Button variant='danger' onClick={()=>dispatch(removeFromWishlist(item.id))}><FontAwesomeIcon icon={faTrash} /></Button>
            <Button variant='success' onClick={()=>handlecart(item)}><FontAwesomeIcon icon={faCartShopping} /></Button>
          </div>
        </Card.Body>
      </Card>
        </Col>
      ))}
    </Row>

    :
    <div style={{width:'100%', height:'70vh', display:'flex',justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
      <img src="https://www.pavejewelers.com/assets/images/empty-wishlist.png" alt="empty wishlist" />
      <button className='btn btn-primary mt-4'><FontAwesomeIcon icon={faArrowLeft} className='me-2' />Back to Home</button>
    </div>}
    </>
  )
}

export default Wishlist