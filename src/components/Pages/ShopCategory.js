import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import Items from '../Items/Items';

const ShopCategory = (props) => {
  const { all_product} = useContext(ShopContext);
  return (

    <div className='container shop-category text-ceter'>
      <div className='row shopcategory-products'>
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          }
        })}
      </div>
    </div>

  )
}

export default ShopCategory