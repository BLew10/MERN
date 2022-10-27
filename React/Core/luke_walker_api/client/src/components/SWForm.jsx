import React, { useState }from 'react'
import { useParams } from "react-router";
import {
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom"

const SWForm = (props) => {
  const navigate = useNavigate()

  const [inputs, setInputs] = useState({
    object: "",
    id: 0
  }
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputs)
    props.getInfo(inputs)
    navigate(`/${inputs.object}/${inputs.id}`)
    console.log('IM NAVIGATING')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="object">Search for</label>
      <select name="object" id="object" onChange={(e) => setInputs({ ...inputs, object: e.target.value })}>
        <option value="" hidden>Please Select Object</option>
        <option value="people">people</option>
        <option value="planets">planets</option>
        <option value="people">starships</option>
      </select>
      <label htmlFor="idNum">ID: </label>
      <input type="number" name="idNum" id="idNum" onChange={(e) => setInputs({ ...inputs, id: e.target.value }) }/>
      <button>Submit</button>
    </form>
  )
}

export default SWForm