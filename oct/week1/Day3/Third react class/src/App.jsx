import React from 'react'
import { Route, Routes } from 'react-router'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<h1>Home Page</h1>} />
        <Route path='/about' element={<h1>About Page</h1>} />
        <Route path='/contact' element={<h1>Contact Page</h1>} />
        <Route path='*' element={<h1>404 Page Not Found</h1>} />
        <Route path='/courses' element={<h1>Courses Page</h1>} />
        <Route path='javascript' element={<h1>JavaScript Course Page</h1>} />
      </Routes>
    </div>
  )
}

export default App
