import React from 'react'
import {
    Routes,
    Route,
    Link,
    useNavigate
} from "react-router-dom"
import DeleteButton from './DeleteButton'

const ProductList = (props) => {

    const navigate = useNavigate()
    const handleClick = (id) => {
        navigate(`/products/${id}`)
    }
    
    


    return (
        <div>
            {props.products.map(product => <p><span>{product.title}</span> | 
            <span>${product.price}</span> | <span>{product.description}</span>  <button className='p-1 bg-indigo-300 rounded' name ={product._id} onClick ={(e)=>{handleClick(e.target.name)}}>More Details</button>  <DeleteButton successfulCallback={()=>props.removeFromDom(product._id)} id={product._id}/></p>)}
        </div>
    )
}

export default ProductList