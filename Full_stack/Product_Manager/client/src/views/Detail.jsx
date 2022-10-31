import React, {useEffect, useState} from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'
import {
    Routes,
    Route,
    Link,
    useNavigate
} from "react-router-dom"

const Detail = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()
    
    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res => {console.log(res)})
            .catch(err => console.error(err));
        navigate('/products')
        
    }
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setProduct(res.data[0])
                console.log(res.data,"**8")
            })
            .catch(err => console.error(err))
    }, [])

    return (
        <div>
            <div>Details about {product.title}</div>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <div>
            <Link to ={`/products/${id}/edit`}>Edit</Link>
            <button onClick ={()=>deleteProduct(id)}>Delete</button>
            <Link to ={"/products"}>Back to All Produts</Link>
            </div>
        </div>
    )
}

export default Detail