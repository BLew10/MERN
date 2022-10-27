import React from 'react'
import { useParams } from "react-router";

const WordorNumber = () => {
    const { wordOrNumber, wordColor, bgColor } = useParams()

    return (
        <div>
            {isNaN(wordOrNumber) ? <h1 style={{ color: wordColor, backgroundColor: bgColor }}>The word is: {wordOrNumber}</h1>
                : <h1>The number is: {wordOrNumber}</h1>}
        </div>
    );
}

export default WordorNumber