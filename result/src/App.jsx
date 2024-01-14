import { useState } from 'react'
import Left from './Components/Left'
import Right from './Components/Right'
import Attribution from './Components/attribution'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className='min-h-[100vh] flex flex-col justify-center items-center '>
        <div className="main flex flex-row justify-center items-center flex-wrap maindiv rounded-[1.5rem]">
          <Left/>
          <Right/>
        </div>
        <Attribution/>
      </section>
    </>
  )
}

export default App
