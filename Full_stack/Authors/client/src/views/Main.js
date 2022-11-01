import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AuthorForm from '../components/AuthorForm';
import AuthorList from '../components/AuthorList'
import {
    Routes,
    Route,
    Link,
    useNavigate
} from "react-router-dom"


const Main = (props) => {
    const [loaded, setLoaded] = useState(false)
    const [authors, setAuthors] = useState([])

    useEffect(() =>{
        axios.get('http://localhost:8000/api/authors')
            .then(res=>{
                setAuthors(res.data)
                setLoaded(true)
            })
            .catch(err => console.error(err))
    }, [loaded])

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId));
    }


    return (
        <div>
            {/* <AuthorForm onSubmitProp = {newAuthor} initialFirstName ="" initialLastName =""/> */}
                { loaded && <AuthorList authors = {authors} removeFromDom={removeFromDom}/> } 
                <Link to={'/authors/new'} className="hover:underline hover:text-cyan-500 text-blue-400"> Add An Author </Link>
        </div>
    )
}


export default Main


