import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import {useParams} from 'react-router-dom';
import ProductDisplay from '../ProductDisplay/ProductDisplay';
import Breadcrums from '../Breadcrums/Breadcrums';



const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId));
  return (
    <div>
    <Breadcrums product={product}/>
   <ProductDisplay product={product}/> 
    </div>
  )
}

export default Product