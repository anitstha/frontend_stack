import React, { useState } from 'react'

const App = () => {
  const [user, setUser] = useState([]);

  const getUser = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data)
  }

  return (
    <div>
      <button onClick={getUser} className='bg-green-600 py-4 px-8 rounded text-xl font-bold text-white m-8 cursor-pointer active:scale-95'>Get Data</button>

      {
        data.map((dets, index)=>{
          return <h1>{dets.name}</h1>
        })
      }
    </div>
  )
}

export default App