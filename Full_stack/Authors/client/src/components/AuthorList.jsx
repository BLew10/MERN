import React from 'react'
import {
    Routes,
    Route,
    Link,
    useNavigate
} from "react-router-dom"
import DeleteButton from './DeleteButton'

const AuthorList = (props) => {

    const navigate = useNavigate()
    const handleClick = (id) => {
        navigate(`/authors/${id}/edit`)
    }
    
    


    return (
        <div>
            <h1 className='text-2xl font-bold'>Favorite Authors</h1>
            {props.authors.map(author => <p><span>{author.firstName} {author.lastName}</span>  <button className='p-1 bg-indigo-300 rounded' id ={author._id} onClick ={(e)=>{handleClick(e.target.id)}}>Update</button>  <DeleteButton successfulCallback={()=>props.removeFromDom(author._id)} id={author._id}/></p>)}
        </div>
    )
}

export default AuthorList