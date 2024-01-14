import React from "react";

export default function Left() {
  return (
    <div className="bg-blue-300 h-[25rem] w-[18.2rem] flex flex-col justify-center items-center relative leftdiv rounded-[1.5rem] ">
      <p className="text-center absolute top-[5%] text-[#c8c7ff] mb-[1rem] text-[1.1rem] font-semibold">Your Result</p>
      <div className="bg-red-500 w-[10rem] h-[10rem] flex flex-col justify-center items-center rounded-[100%] circle m-[1rem]">
        <h1 className="text-[#ffffff] text-[4rem] font-semibold">76</h1>
        <p className="text-[#897dfe]">of 100</p>
      </div>
      <h1 className="text-[#ffffff] text-[1.5rem] mb-[1rem] font-semibold">Great</h1>
      <p className=" text-center w-[70%] text-[#c8c7ff]">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
}
