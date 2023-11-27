import React, { useEffect, useState } from 'react'
import all_product from '../Assets/all_product';
const AllProducts = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;


    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            // const response = await fetch(all_product);
            // if (componentMounted) {
            //     setData(await response.clone().json());
            //     setFilter(await response.json());
            //     setLoading(false);
            //     console.log(filter);
            // }

            // return () => {
            //     componentMounted = false;
            // }


        }
        getProducts();
    }, []);






    const Loading = () => {
        return (
            <>
                Loading .....
            </>
        )
    }


    const ShowProducts = () => {
        return (
            <>
                <div className='buttons d-flex justify-content-center'>
                    <button className='btn me-2'>ALL</button>
                    <button className='btn me-2'>WOMAN</button>
                    <button className='btn me-2'>MAN</button>
                    <button className='btn me-2'>ONSALE</button>
                    <button className='btn me-2'>NEW</button>
                </div>


                


                {filter.map((product) => {
                    return (
                        <div class="card my-5 py-4" key={product.id} style={{ width: "18rem" }}>
                            <img src={all_product.image} class="card-img-top" alt={all_product.title} />
                            {/* <div class="card-body text-center">
                                <h5 class="card-title">{item.title}</h5>
                                <p className="lead">${item.price}</p> */}
                            {/* <NavLink to={`/products/${item.id}`} class="btn btn-outline-primary">Buy Now</NavLink> */}
                            {/* </div> */}
                        </div>
                    )
                })}
            </>
        )
    }






    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Product</h1>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-around">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    )
}

export default AllProducts
