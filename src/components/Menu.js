import React from 'react'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Menu() {
  return (
   <div >
   <Navbar className='ps-5 pe-5  fixed-top' bg="light" data-bs-theme="light">

    <div className='row mt-1'>
       
       <div className='col-md-4 ' style={{color:'#555'}}>
         <Nav className=" ">
           <Nav.Link href="#home" className='pe-3'>DEMO</Nav.Link>
           <Nav.Link href="#features" className='pe-3'>SHOP  <span style={{ backgroundColor: '#f76b6a', borderRadius: '0.1px', bottom: '50px' }} class="position-absolute ps-2 pe-2   translate-middle badge ">
             SALE
             <span class="visually-hidden">unread messages</span>
           </span>
           </Nav.Link>
           <Nav.Link href="#pricing" className='pe-3'>BLOG</Nav.Link>
           <Nav.Link href="#pricing" className='pe-3' >PAGES</Nav.Link>
           <Nav.Link href="#pricing" className='pe-3'>BUY THEME <span style={{ backgroundColor: '#f76b6a', borderRadius: '0.1px', bottom: '50px' }} class="position-absolute ps-2 pe-2   translate-middle badge ">
             SALE
             <span class="visually-hidden">unread messages</span>
           </span> </Nav.Link>
         </Nav>
       </div>
       <div className='col-md-4 text-center'><Navbar.Brand href="/" className='text-center'><h1>ELESSI<span style={{ color: '#f76b6a' , fontWeight:'700' }}>.</span></h1></Navbar.Brand>
       </div>

       <div className='col-md-4 text-end ' style={{color:'#555'}}><Navbar.Brand href="#home" >
         <i class="bi bi-search pe-4" style={{color:'#333'}}></i>
         <i class="bi bi-gear pe-4" style={{color:'#333'}}></i>
         <i class="bi bi-heart pe-4" style={{color:'#333'}}><span style={{ backgroundColor: '#f76b6a' }} class="position-absolute top-0 translate-middle badge rounded-pill ">
0
<span class="visually-hidden">unread messages</span>
</span></i>
         <i class="bi bi-cart2 pe-4" style={{color:'#333'}}><span style={{ backgroundColor: '#f76b6a' }} class="position-absolute top-0 translate-middle badge rounded-pill ">
2
<span class="visually-hidden">unread messages</span>
</span></i>
         </Navbar.Brand></div>
    </div>

   </Navbar>
 </div>
  )
}

export default Menu