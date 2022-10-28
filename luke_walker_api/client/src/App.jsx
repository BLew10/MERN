import { useState, useEffect } from 'react'
import './App.css'
import {
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom"
import SWForm from './components/SWForm'
import People from './components/People'
import Planets from './components/Planets'
import Error from './components/Error'

function App() {
  const navigate = useNavigate()
  const [currentInfo, setCurrentInfo] = useState({})

  const getInputs = (inputs) => {
        setCurrentInfo(inputs)
  }


  return (
    <div className="App">
      <SWForm getInfo={getInputs} />
      <Routes>
        <Route exact path="/planets/:id" element={<><Planets inputs={currentInfo} /></>} />
        <Route exact path="/people/:id" element={<><People inputs={currentInfo} /></>}/>
        <Route exact path="/error" element={<><Error/></>}/>
      </Routes>
    </div>
  )
}

export default App
