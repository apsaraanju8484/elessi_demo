import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar =() =>{

const [menu,setMenu] =useState("shop")


  return (
   <p>
      <div className='text-center '>
        <h2 className='fw-bold'>Trendy item</h2>
       
        </div>
      {/* <div className='navbar'>
       
  <ul className='nav-menu'>
   <li class="nav-item" onClick={()=>{setMenu("shop")}}><Link className='active' to='/all'>All</Link></li>
   <li class="nav-item" onClick={()=>{setMenu("mens")}}><Link  to='/mens'>Man</Link></li>
   <li onClick={()=>{setMenu("womens")}}><Link  to='/womens'>Women</Link></li>
   <li onClick={()=>{setMenu("onsale")}}><Link  to='/onsale'>Onsale</Link></li>
   <li onClick={()=>{setMenu("new")}}><Link  to='/new'>New</Link></li>
  </ul>
  
      </div> */}



      <nav class="navbar navbar-expand-lg ">
  
  <div className='col-center'>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item  me-5" onClick={()=>{setMenu("shop")}}><Link class="nav-link active" to='/all'>All</Link>
        </li>
        <li class="nav-item me-5" onClick={()=>{setMenu("womens")}}><Link class="nav-link" to='/womens'>Women</Link>
         
         </li>
        <li class="nav-item me-5" onClick={()=>{setMenu("mens")}}><Link class="nav-link" to='/mens'>MAN</Link>
         
        </li>
        <li class="nav-item me-5" onClick={()=>{setMenu("onsale")}}><Link class="nav-link" to='/onsale'>Onsale</Link>
        </li>
        <li class="nav-item me-5" onClick={()=>{setMenu("new")}}><Link class="nav-link" to='/new'>New</Link>
        </li>
      </ul>
    </div>
  </div >
</nav>
   </p>
  )
}

export default Navbar