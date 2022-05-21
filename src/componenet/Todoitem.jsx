import React, { useState } from 'react'

const Todoitem = ({e,onDelete}) => {
  // console.log('this', e.status)
  const [iscomplete,setComplete]= useState(e.status);
  
  return(  <div>
      {/* <input   type="checkbox" onClick={(e)=>{
          console.log(e.target.checked,iscomplete)
          setComplete(e.target.checked)
      }} /> */}
      <input   type="checkbox" checked={iscomplete} onChange={(e)=>{
          // console.log(e.target.checked,"iscomplete")
          setComplete(e.target.checked);
          
      }} />
      { <p style={{backgroundColor: iscomplete?"green":""}}>{e.title}</p> }
      
      <button onClick={()=>{ return onDelete(e.identity)}}>delete</button>
  </div>
  )
}

export default Todoitem