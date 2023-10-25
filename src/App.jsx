import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200 '
    style={{backgroundColor:color}}>
      <div className='flex flex-wrap fixed bottom-12 inset-x-0 px-2 justify-center'>
        <div 
        className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl items-center'>
          <button
          className='ontline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{backgroundColor: "red"}}
          onClick={() => setColor("red")}>
            Red
          </button>
          <button
          className='ontline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{backgroundColor: "green"}}
          onClick={() => setColor("green")}>
            Green
          </button>
          <button
          className='ontline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{backgroundColor: "olive"}}
          onClick={() => setColor("olive")}>
            Olive
          </button>
          <button
          className='ontline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{backgroundColor: "blue"}}
          onClick={() => setColor("blue")}>
            Blue
          </button>
          <button
          className='ontline-none px-4 py-1 rounded-full text-black shadow-lg' 
          style={{backgroundColor: "white"}}
          onClick={() => setColor("white")}>
            White
          </button>
          <button
          className='ontline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{backgroundColor: "black"}}
          onClick={() => setColor("black")}>
            Black
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
