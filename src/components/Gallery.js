import React from 'react'

function Gallery() {
 return (
  <div>
   <div className='container'>
    <div className='row pt-5 mb-5'>
     <div className='col-md-6 '>
      <img src='https://demo-elessi.myshopify.com/cdn/shop/files/h1-banner1x_62d7ab74-f7fd-4fa5-9556-10ac4ff1a875_670x.jpg?v=1613174186' className='w-100 mt-2 '  />

     </div>




     <div className='col-md-6 '>

      <div className='row pt-2'>
       <div className='col-md-6 '>
       <div className='border text-center  p-3'>
      <p className='p-4'>
        <h5 className='pt-3' style={{letterSpacing:'12px',fontWeight:'600',color:'#666', lineHeight:'17px'}} >ELESSI </h5>
         <h1>Summer Lookbook</h1>
      </p>
       </div>
       </div>
       <div className='col-md-6 mb-0'>
       <img src='https://demo-elessi.myshopify.com/cdn/shop/files/h1-banner2_303x.jpg?v=1613174184' className='w-100 ' />
       </div>
      </div>

      <div className='row'>      
       <div className='col-md-6 '>
       <img src='https://demo-elessi.myshopify.com/cdn/shop/files/h1-banner3_670x.jpg?v=1613174184' className='pt-2 ' />
       </div>
      </div>

     </div>
    </div>
   </div>
  </div>
 )
}

export default Gallery