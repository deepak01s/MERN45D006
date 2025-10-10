import React, { use, useEffect } from 'react'

function Home() {

    const [count, setCount] = React.useState(0)
useEffect(() => {
    alert("Welcome to Home Page")})
  return (
    <div>
      Home Page
      <br />
      <button>
        Click Me
      </button>
    </div>
  )
}

export default Home
