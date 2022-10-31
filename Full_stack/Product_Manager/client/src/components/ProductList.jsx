import React from 'react'
import {
    Routes,
    Route,
    Link,
    useNavigate
} from "react-router-dom"
import axios from 'axios'

const ProductList = (props) => {
    const navigate = useNavigate()
    const handleClick = (id) => {
        navigate(`/products/${id}`)
    }
    
    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                props.removeFromDom(id)
            })
            .catch(err => console.error(err));

        
    }
    


    return (
        <div>
            {props.products.map(product => <p><span>{product.title}</span> | 
            <span>${product.price}</span> | <span>{product.description}</span>  <button className='p-1 bg-indigo-300 rounded' name ={product._id} onClick ={(e)=>{handleClick(e.target.name)}}>More Details</button> <button className='p-1 bg-red-300 rounded' onClick ={()=>deleteProduct(product._id)}>Delete</button></p>)}
        </div>
    )
}

export default ProductList