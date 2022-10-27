import React from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useParams } from "react-router";
import WordorNumber from "./components/WordorNumber";

// const WordOrNumber = (props) => {
//   const { wordOrNumber, wordColor, bgColor } = useParams()

//   return (
//     <div>
//       {isNaN(wordOrNumber) ? <h1 style={{color : wordColor, backgroundColor: bgColor}}>The word is: {wordOrNumber}</h1> 
//       : <h1>The number is: {wordOrNumber}</h1>}
//     </div>
//   );
// }

const Welcome = (props) => {
  return (
    <div>
      <h1 style={{ color: "blue" }}>Welcome</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/:wordOrNumber/:wordColor/:bgColor" element={<WordorNumber />} />
        <Route path="/:wordOrNumber/:wordColor" element={<WordorNumber />} />
        <Route path="/:wordOrNumber" element={<WordorNumber />} />
        <Route path="/" element={<Welcome />} />
      </Routes>
    </div>
  );
}

export default App;
