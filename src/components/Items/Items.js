import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Items = (props) => {
  return (
    <div>
       <div className='item col-md-12 text-center '>
        <div className=''>
<div class="product-grid">
        <div class="product">
          <div class="product-img pb-3">
          <Link to={`/product/${props.id}`} >
            
 {/*<img src={props.image} style={{ marginTop: '-23px' }} className='zoom-in-out-box p-0' /> */}
           
            
            <div>
              <img src={props.image} alt="front product image"  />
              <img src={props.image1} alt="rear product image" class="rear-img" />
              <i class="bi bi-eye rear-img1 bg-dark  text-white " ></i>
              <i class="bi bi-handbag rear-img2 bg-danger  text-white"></i>
              <i className='bi bi-heart   rear-img3'></i>
              <div className='box rear-img4 ps-2 pe-2 '>{props.discount}</div>
             
            </div>
  
          </Link>
          </div>
        </div>
       <div className='row'>
         <div className='float-start col-md-8'>
           <h6 className='text-justify '>{props.name}</h6>
           <p className='text-justify'>$ {props.new_price} </p>
         </div>
         <div className='float-end col-md-4 circle'>
           
         <img src={props.color} className='w-25 '   />
         <img src={props.color1} className='w-25'   />
         <img src={props.color2} className='w-25'   />
         </div>
       </div>
      </div>
       </div>
      </div>
     

      {/* <div class="product-grid">
        <div class="product">
          <div class="product-img">
            <img src={props.image} alt="front product image" />
            <img src="images/1b.jpg" alt="rear product image" class="rear-img" />
          </div>
          <div class="product-info">

            <a href="#" class="product-btn">Buy now</a>
          </div>
        </div>
      </div> */}

    </div>















  )
}
export default Items


