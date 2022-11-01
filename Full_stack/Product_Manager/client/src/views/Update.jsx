import React, {useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import {
    Routes,
    Route,
    Link,
    useNavigate
} from "react-router-dom"

import ProductForm from '../components/ProductForm';


const Update = (props) => {
    const { id } = useParams()
    const [loaded, setLoaded] = useState(false)
    const navigate = useNavigate()
    //keep track of what is being typed via useState hook
    const [product, setProduct] = useState({
        title: "",
        price: 0,
        description: ""
    });
    //handler when the form is submitted

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setProduct({
                    title: res.data[0].title,
                    price: res.data[0].price,
                    description: res.data[0].description
                })
                setLoaded(true)
            })
    }, []);

    const updateProduct = (product) => {
        axios.put(`http://localhost:8000/api/products/${id}`, {
            ...product
        })
            .then(res => console.log(res))
            .catch(err => console.log("You are getting this err: ", err))
        navigate(`/products/${id}`)
        setLoaded(false)
    }
    //onChange to update firstName and lastName
    return (

        <div>
        {loaded && <ProductForm onSubmitProp={updateProduct} currTitle ={product.title} currPrice = {product.price} currDescription = {product.description}/>}
        <Link to ={"/products"}>Back to All Produts</Link>
        </div>
    )
}

export default Update

        // <form onSubmit={onSubmitHandler}>
        //     <h1>Update Product</h1>
        //     <p>
        //         <label>Title: </label><br />
        //         <input type="text" onChange={(e) => changeHandler(e)} value={product.title} name="title" />
        //     </p>
        //     <p>
        //         <label>Price: </label><br />
        //         <input type="number" onChange={(e) => changeHandler(e)} value={product.price} name="price" />
        //     </p>
        //     <p>
        //         <label>Description: </label><br />
        //         <input type="text" onChange={(e) => changeHandler(e)} value={product.description} name="description" />
        //     </p>
        //     <input type="submit" />
        // </form>