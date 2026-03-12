import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className='main'>
      <h1>{count}</h1>

      <div className="btn">
      <button onClick={()=> setCount(count+1)}>Increase</button>
      <button onClick={()=> setCount(count-1)}>Decrease</button>
      </div>
    </div>
  )
}

export default App