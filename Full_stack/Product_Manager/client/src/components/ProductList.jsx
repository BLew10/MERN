import React from 'react'
import {
    Routes,
    Route,
    Link,
    useNavigate
} from "react-router-dom"

const ProductList = (props) => {
    const navigate = useNavigate()
    const handleClick = (id) => {
        navigate(`/products/${id}`)
    }


    return (
        <div>
            {props.products.map(product => <p><span>{product.title}</span> | 
            <span>${product.price}</span> | <span>{product.description}</span>  <button name ={product._id} onClick ={(e)=>{handleClick(e.target.name)}}>More Details</button></p>)}
        </div>
    )
}

export default ProductList