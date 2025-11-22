import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div style={{ backgroundColor: color, height: "100vh", width: "100%" }}>
      
      {/* Bottom Bar */}
      <div className='fixed flex flex-wrap justify-center bottom-2 inset-x-0 px-2'>
        
        <div className='flex flex-wrap justify-center gap-3 shadow bg-white px-3 py-2 rounded-xl'>

          <button 
            onClick={() => setColor("red")}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
            style={{ backgroundColor: "red" }}
          >
            RED
          </button>

          <button 
            onClick={() => setColor("violet")}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
            style={{ backgroundColor: "violet" }}
          >
            VIOLET
          </button>

          <button 
            onClick={() => setColor("blue")}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
            style={{ backgroundColor: "blue" }}
          >
            BLUE
          </button>

          <button 
            onClick={() => setColor("green")}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
            style={{ backgroundColor: "green" }}
          >
            GREEN
          </button>

          <button 
            onClick={() => setColor("pink")}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
            style={{ backgroundColor: "pink" }}
          >
            PINK
          </button>

          <button 
            onClick={() => setColor("orange")}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
            style={{ backgroundColor: "orange" }}
          >
            ORANGE
          </button>

          <button 
            onClick={() => setColor("black")}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
            style={{ backgroundColor: "black" }}
          >
            BLACK
          </button>

          <button 
            onClick={() => setColor("white")}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
            style={{ backgroundColor: "white" }}
          >
            WHITE
          </button>

        </div>

      </div>

    </div>
  )
}

export default App
