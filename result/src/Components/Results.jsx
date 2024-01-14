import React from 'react';
import icon from "../assets/images/icon-memory.svg";
import icon1 from "../assets/images/icon-reaction.svg";
import icon2 from "../assets/images/icon-verbal.svg";
import icon3 from "../assets/images/icon-visual.svg";

export default function Results(props) {
  return (
    <div className={`flex flex-row justify-between items-center ${props.score==80?"bg-[#fff6f5]":props.score==61?"bg-[#fffbf2]":props.score==92?"bg-[#f2fbfa]":"bg-[#f3f3fd]"} w-[15rem] my-[0.5rem] p-[0.7rem] rounded-[0.4rem]`}>
        <div className="name flex flex-row justify-center items-center gap-[0.5rem]">
            <img src={props.score==80?icon1:props.score===61?icon2:props.score===92?icon:icon3} alt="icon" />
            <p className={`${props.score==80?"text-[#ff5757]":props.score==92?"text-[#ffb01f]":props.score==61?"text-[#00bd91]":"text-[#1125d4]"}`}>{props.name}</p>
        </div>
        <div className="marks text-[#9d9fad]">
          <span className='font-bold text-[#3f4356]'>{props.score}</span>/100
        </div>
    
    </div>
  )
}
