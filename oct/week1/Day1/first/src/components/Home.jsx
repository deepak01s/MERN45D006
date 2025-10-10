import React from 'react'

function Home(props) {
  return (
    <div>
      This is the Home page
      value={props.a} <br />
      String={props.str} <br />
      Array is={props.arr}
    </div>
  )
}

export default Home
