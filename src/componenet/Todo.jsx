import React, { useState } from 'react'
import Todolist from './Todolist.jsx'
const Todo = () => {
    const [querry,setQuerry]= React.useState('')
  return (
    <div>
        <h1>todo</h1>
        <input onChange={(e)=>{
            setQuerry(e.target.value)
           // console.log(querry)
        }}/>     
       
        <Todolist querry={querry}/>
        
    </div>
  )
}

export default Todo