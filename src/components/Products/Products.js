import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'

const Products = () => {



    const [all_product, setAll_product] = useState([])
    const [filter, setFilter] = useState(all_product)
let componentMounted = true;
    
    

    useEffect(() => {
     const  fetchData = async () => {
            const response = await fetch('/all_products.json')
            response.json().then(
                data => {
                    setAll_product(data.all_product);
                }
            )
        }
        console.log(all_product);
        fetchData()
        // setFilter(result.clone().json());
    }, [])


    return (
        <div className='container'>
            <Row>
                <div className='button  text-center mb-3'>
                    <button className='btn me-2' onClick={()=>setAll_product("all")}>All</button>
                    <button className='btn me-2'>WOMEN</button>
                    <button className='btn me-2'>MAN</button>
                    <button className='btn me-2'>ONSALE</button>
                    <button className='btn me-2'>NEW</button>
                </div>
            </Row>


            <Row>
                {
                    all_product.map(item => (
                        <Col md={4} sm={6} xs={12} className='p-3'>
                            <img src={item.image} className='w-100'/>
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}

export default Products
