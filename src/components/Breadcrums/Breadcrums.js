import React from 'react'

const Breadcrums = (props) => {
 const {product} = props;
  return (
    <div className='container ps-5 breadcrums'>
      {/* Home Shop {product.category} {product.name} */}


      <nav  aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item fw-bold"><a href="/" style={{textDecoration:'none'}}>Home  </a></li>
    <li class="breadcrumb-item active" aria-current="page">  {product.category}</li>
    <li class="breadcrumb-item active text-success " aria-current="page">   {product.name}</li>
  </ol>
</nav>
    </div>
  )
}

export default Breadcrums
