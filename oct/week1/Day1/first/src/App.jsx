import { useState } from 'react'

import './App.css'
import Home from './components/Home'

function App() {
  const [count,]=useState(10);
  return (
    <div>This is my app page
      <Home a={3} str="String" arr={[1,2,3,4,5]} />
    </div>
  )
}

export default App
