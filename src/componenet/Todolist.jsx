import React, { useState } from 'react'
import Todoitem from './Todoitem'
const Todolist = (props) => {
    //console.log(props)
    const [list,setList]= useState([]);
  const onDelete = (id) => {
    let newList = list.filter((list)=>(list.identity != id));
    setList(newList);
  }
  return (
<>

<button  onClick={()=>{
        setList([...list,{
            status:false,
            title:props.querry,
            identity:Date.now()
        }])
        //console.log(list)
    }

}>+</button>

{list.map(e=>(
   
     <Todoitem e={e} onDelete={onDelete}  key={e.identity}/>
))}
</>

  )
}

export default Todolist