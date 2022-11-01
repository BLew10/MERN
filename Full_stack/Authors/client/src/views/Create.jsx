import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AuthorForm from '../components/AuthorForm';
import {
    Routes,
    Route,
    Link,
    useNavigate
} from "react-router-dom"


const Main = (props) => {
    const navigate = useNavigate()
    const [loaded, setLoaded] = useState(false)
    const [authors, setAuthors] = useState([])
    const [errors, setErrors] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                setAuthors(res.data)
                setLoaded(true)
            })
    }, [loaded])

    const newAuthor = (author) => {
        axios.post('http://localhost:8000/api/authors/new', {
            ...author
        })
            .then(res => {
                console.log(res)
                navigate('/authors')
            })
            .catch(err => {
                const errorResponse = err.response.data.errors
                const errorArr = []

                for (const key in errorResponse) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr)
            })
        // .catch(err=>console.log(err))
        setLoaded(false)
    }

    return (
        <div>
            <h1>Add a New Author</h1>
            <AuthorForm onSubmitProp={newAuthor} initialFirstName="" initialLastName="" errors={errors} />
            <Link to={'/authors'}> Home </Link>

        </div>
    )
}


export default Main


