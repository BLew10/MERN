import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList'


const Main = (props) => {
    const [loaded, setLoaded] = useState(false)
    const [products, setProducts] = useState([])

    useEffect(() =>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setProducts(res.data)
                setLoaded(true)
                console.log(res)
                console.log(loaded)
            })
            .catch(err => console.error(err))
        console.log(loaded)
    }, [loaded])

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId));
    }

    const newProduct = (product) => {
        axios.post('http://localhost:8000/api/products/new', {
            ...product
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
        setLoaded(false)
    }

    return (
        <div>
            <ProductForm onSubmitProp = {newProduct} currTitle ="" currPrice ={0} currDescription =""/>
            <hr/>
                { loaded && <ProductList products = {products} removeFromDom={removeFromDom}/> } 
        </div>
    )
}


export default Main


