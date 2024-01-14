import React from 'react'

export default function Results(props) {
  return (
    <div className={`flex flex-row justify-between items-center ${props.score==80?"bg-[#fff6f5]":props.score==92?"bg-[#fffbf2]":props.score==92?"bg-[#f2fbfa]":"bg-[#f3f3fd]"} w-[17rem] my-[0.5rem] p-[0.7rem] rounded-[0.3rem]`}>
        <div className="name flex flex-row justify-center items-center gap-[0.5rem]">
            <img src={props.icon} alt="icon" />
            <p >{props.name}</p>
        </div>
        <div className="marks">
          <span className='font-bold'>{props.score}</span>/100
        </div>
    
    </div>
  )
}
