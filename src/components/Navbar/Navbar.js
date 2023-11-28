import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar =() =>{

const [menu,setMenu] =useState("shop")


  return (
   <p>
      <div className='text-center '>
        <h2 className='fw-bold mb-3'>Trendy item</h2>
       
        </div>
    



     
       

<div className='container navbar1'>
<div className='col-center text-center navbar-nav1'>
<a className='btn nav-item me-5' onClick={()=>{setMenu("shop")}}><Link class="nav-link active" to='/all'>All</Link></a>
<a className='btn nav-item me-5' onClick={()=>{setMenu("womens")}}><Link class="nav-link" to='/womens'>Women</Link></a>
<a className='btn nav-item me-5' onClick={()=>{setMenu("mens")}}><Link class="nav-link" to='/mens'>MAN</Link></a>
<a className='btn nav-item me-5' onClick={()=>{setMenu("onsale")}}><Link class="nav-link" to='/onsale'>Onsale</Link></a>
<a className='btn nav-item me-5' onClick={()=>{setMenu("new")}}><Link class="nav-link" to='/new'>New</Link></a>
</div>
</div>


   </p>
  )
}

export default Navbar