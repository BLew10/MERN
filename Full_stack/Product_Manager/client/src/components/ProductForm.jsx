import React, { useState } from 'react'
import axios from 'axios';


const ProductForm =  (props) => {
    //keep track of what is being typed via useState hook
    const [product, setProduct] = useState({
        title: "",
        price: 0,
        description: ""
    }); 
    //handler when the form is submitted

    const changeHandler = (e) => {
        setProduct({...product, [e.target.name]: e.target.value})
    }
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/products/new', {
            ...product
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
            props.newProduct()
            setProduct({
                title: "",
                price: 0,
                description: ""
            })
    }
    //onChange to update firstName and lastName
    return (
        <form onSubmit={onSubmitHandler}>
            <h1>Product Manager</h1>
            <p>
                <label>Title: </label><br/>
                <input className='border-2 border-slate-300 rounded' type="text" onChange={(e)=>changeHandler(e)} value={product.title} name="title"/>
            </p>
            <p>
                <label>Price: </label><br/>
                <input className='border-2 border-slate-300 rounded' type="number" onChange={(e)=>changeHandler(e)}  value={product.price} name="price"/>
            </p>
            <p>
                <label>Description: </label><br/>
                <input className='border-2 border-slate-300 rounded' type="text" onChange={(e)=>changeHandler(e)} value={product.description} name="description"/>
            </p>
            <input className='p-1 bg-slate-300 rounded' type="submit"/>
        </form>
    )
}

export default ProductForm