import React from 'react'

const Layout = () => {
  return (
    <div className='h-screen w-full bg-gray-50 py-8 px-24 flex gap-4'>
  {/* left */}
  <div className="flex flex-col gap-2 w-1/2">
    <div className="flex-1 w-full bg-green-700 rounded-xl"></div>
    <div className="flex flex-1 gap-2 w-full">
      <div className="flex-1 bg-black rounded-xl"></div>
      <div className="flex-1 bg-amber-300 rounded-xl"></div>
    </div>
  </div>

  {/* right */}
  <div className="flex flex-col gap-2 w-1/2">
    <div className="flex flex-1 gap-2 w-full">
      <div className="flex-1 bg-black rounded-xl"></div>
      <div className="flex-1 bg-amber-300 rounded-xl"></div>
    </div>
    <div className="flex-1 w-full bg-green-700 rounded-xl"></div>
  </div>
</div>
  )
}

export default Layout