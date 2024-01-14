import React from 'react'

export default function Results(props) {
  return (
    <div className={`flex flex-row justify-between items-center ${props.score==80?"bg-[#fff6f5]":props.score==61?"bg-[#fffbf2]":props.score==92?"bg-[#f2fbfa]":"bg-[#f3f3fd]"} w-[15rem] my-[0.5rem] p-[0.7rem] rounded-[0.4rem]`}>
        <div className="name flex flex-row justify-center items-center gap-[0.5rem]">
            <img src={props.icon} alt="icon" />
            <p className={`${props.score==80?"text-[#ff5757]":props.score==92?"text-[#ffb01f]":props.score==61?"text-[#00bd91]":"text-[#1125d4]"}`}>{props.name}</p>
        </div>
        <div className="marks text-[#9d9fad]">
          <span className='font-bold text-[#3f4356]'>{props.score}</span>/100
        </div>
    
    </div>
  )
}