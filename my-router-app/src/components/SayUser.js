import React from 'react'
import {useParams} from "react-router-dom"

const SayUser = () => {
    const params = useParams()
  return (
    <h1> your name is {params.userId}</h1>
  )
}

export default SayUser