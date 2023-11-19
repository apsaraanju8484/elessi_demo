import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar =() =>{

const [menu,setMenu] =useState("shop")


  return (
   <p>
      <div className='text-center '>
        <h2>Trendy item</h2>
       
        </div>
      <div className='navbar'>
       
  <ul className='nav-menu'>
   <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none', color:'black'}} to='/all'>All</Link>{menu==="shop"?<hr/>:<></>}</li>
   <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none', color:'black'}} to='/mens'>Man</Link>{menu==="mens"?<hr/>:<></>}</li>
   <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none', color:'black'}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
   <li onClick={()=>{setMenu("onsale")}}><Link style={{textDecoration:'none', color:'black'}} to='/onsale'>Onsale</Link>{menu==="onsale"?<hr/>:<></>}</li>
   <li onClick={()=>{setMenu("onsale")}}><Link style={{textDecoration:'none', color:'black'}} to='/new'>New</Link>{menu==="new"?<hr/>:<></>}</li>
  </ul>
  
      </div>
   </p>
  )
}

export default Navbar