import React from "react";

export default function Left() {
  return (
    <div className="bg-blue-300 h-[25rem] w-[20rem] flex flex-col justify-center items-center relative leftdiv rounded-[1.5rem]">
      <p className="text-center absolute top-[5%]">Your Result</p>
      <div className="bg-red-500 w-[10rem] h-[10rem] flex flex-col justify-center items-center rounded-[100%] circle">
        <h1>76</h1>
        <p>of 100</p>
      </div>
      <h1>Great</h1>
      <p className="bg-pink-500 text-center w-[55%] ">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
}
