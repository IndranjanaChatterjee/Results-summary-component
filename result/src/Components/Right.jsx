import React from 'react';
import data from "./data.json"
import Results from './Results';



export default function Right() {
  return (
    <div className='bg-[#ffffff] p-[1.3rem] h-[25rem] w-[18.2rem] flex flex-col justify-center items-center rounded-r-[1.2rem]'>
      <h1 className="text-[#262a43] text-left w-[100%] mb-[1rem] w-[15rem] font-bold text-[1.4rem] " >Summary</h1>
      {data.map((datas)=>
      (
        <Results icon={datas.icon} name={datas.category} score={datas.score} key={datas.score}/>
      ))

      }
      <button className='w-[15rem] bg-[#303b59] text-[#fcffff] mt-[1rem] h-[2.5rem] rounded-[1.5rem] btn transition-all duration-300 ease-linear '>Continue</button>
      

    </div>
  )
}
 