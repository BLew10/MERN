import React, {useEffect, useState} from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'

const Detail = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams()
    console.log(id)
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
            <a href="/products">Back to All Products</a>
        </div>
    )
}

export default Detail