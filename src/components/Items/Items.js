import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Items = (props) => {
  return (
  <div>
      <div className='item col-md-12 text-center '>






      <div className='bg-light'>
      
        <Link to={`/product/${props.id}`} >
        <p className='fw-bold fs-4 text-dark text-end pb-0 pe-3 pt-3'><i className='bi bi-heart  '></i></p>
          <img  src={props.image} style={{marginTop:'-23px'}} className='zoom-in-out-box p-0'/></Link>
        </div>
    
      <h6 className='text-justify pt-4'>{props.name}</h6>

      <p className='text-justify'>$ {props.new_price} </p>
   
     
      
      </div>
   
  </div>
  )
}
export default Items


