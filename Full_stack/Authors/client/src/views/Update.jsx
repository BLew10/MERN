import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import {
    Routes,
    Route,
    Link,
    useNavigate
} from "react-router-dom"

import AuthorForm from '../components/AuthorForm';


const Update = (props) => {
    const { id } = useParams()
    const [loaded, setLoaded] = useState(false)
    const navigate = useNavigate()
    const [errors, setErrors] = useState([])
    //keep track of what is being typed via useState hook
    const [author, setAuthor] = useState({
        firstName: "",
        lastName: ""
    });

    //handler when the form is submitted

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                setAuthor({
                    firstName: res.data[0].firstName,
                    lastName: res.data[0].lastName
                })
                setLoaded(true)
            })
    }, []);

    const updateAuthor = (author) => {

        axios.put(`http://localhost:8000/api/authors/${id}`, {
            ...author
        })
            .then(res => {
                console.log(res)
                navigate('/authors')
            })
            .catch(err => {
                console.log(err)
                const errorResponse = err.response.data.errors
                const errorArr = []

                for (const key in errorResponse) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr)
            })
        // }

    }
    //onChange to update firstName and lastName
    return (

        <div>
            <h1>Edit this Author</h1>
            {loaded && <AuthorForm onSubmitProp={updateAuthor} initialFirstName={author.firstName} initialLastName={author.lastName} errors={errors} />}
            <Link to={"/authors"}>Back to All Authors</Link>
        </div>
    )
}

export default Update
