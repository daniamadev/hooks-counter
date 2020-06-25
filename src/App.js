import React, { useState, useEffect } from "react"

export default function App() {
  const initialState = () => Number(window.localStorage.getItem("count")) || 0
  const [count, setCount] = useState(initialState)

  const incrementarCounter = () => setCount(count + 1)

  const decrementarCounter = () => setCount(count - 1)

  useEffect(() => {
    window.localStorage.setItem("count", count)
  }, [count])

  return (
    <React.Fragment>
      <h1>{count}</h1>
      <button onClick={incrementarCounter}>Incrementar</button>
      <button onClick={decrementarCounter}>Decrementar</button>
    </React.Fragment>
  )
}
