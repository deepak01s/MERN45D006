
import { createContext, useState } from 'react'
import './App.css'
import Child1 from './component/Child1'
import Navbar from './component/Navbar';

const countContext = createContext();
const colorContext = createContext()

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState("blue")

  const [data, setData] = useState([])

  // first create the context object
  // add the provider
  // add the value
  // exports the context object

  // inside the child 
  //  by using useContext we can access the context value


  return (
    <div className='flex flex-col justify-center items-center'>

      {/* <br />
      <button onClick={() => {
        setCount(count + 1)
      }
      } className='border rounded p-2 bg-black text-white'>
        Increment
      </button>
      <br />
      <button onClick={() => setCount(count - 1)} className='border rounded p-2 bg-black text-white'>Dec</button>

      <countContext.Provider value={count}>
        <colorContext.Provider value={color}>
          <Child1 />
        </colorContext.Provider>
      </countContext.Provider> */}

      <Navbar/>
    </div>


  )
}

export { countContext, colorContext }
export default App
