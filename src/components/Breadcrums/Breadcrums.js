import React from 'react'

const Breadcrums = (props) => {
 const {product} = props;
  return (
    <div className='container-fluid bg-light p-3'>
    

<div className='container'>
      <nav  aria-label="breadcrumb" className=''>
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/" style={{textDecoration:'none', color:'black'}}>Home  </a></li>
    <li class="breadcrumb-item active" aria-current="page" style={{textDecoration:'none', color:'black'}}>  {product.category}</li>
    <li class="breadcrumb-item active " aria-current="page" style={{textDecoration:'none', color:'#999'}}>   {product.name}</li>
  </ol>
</nav>
</div>
    </div>
  )
}

export default Breadcrums
