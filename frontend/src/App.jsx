import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes,setjokes] =useState([])

  useEffect(() => {
    axios.get('/api/jokes')
    .then((response) => {
      setjokes(response.data)
    })
    .catch ((error) => {
      console.log(error)
    })
  })

  return (
    <>
     <h1>Hello Its Frontend</h1>
     <p>JOKES: {jokes.length}</p>

     {
      jokes.map((jop,index) => (
        <div key={jop.id} >
          <h4>{jop.dam}</h4>
          <p>{jop.title}</p>
        </div>
      ))
     }
    </>
  )
}

export default App







// CORS : MEaning the origin of both the server or website have same origin or same birth pace
// For example : mother father and you have same origin but a salesman have diffrent origin 
// IF i use CRA (create reat app) i can use proxy 