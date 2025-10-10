import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [data, setData] = useState([])

  const getData = async () => {
    try {
      // Example using GET to fetch data
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
      setData(res.data) // store response in state
      console.log(res.data)
    } catch (err) {
      console.log(err)
    }

    // Example using PUT (you usually won't get an array back here)
    // const res = await axios.put("https://jsonplaceholder.typicode.com/posts/1", obj)
    // console.log(res.data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <ul>
        {data.map((el) => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
