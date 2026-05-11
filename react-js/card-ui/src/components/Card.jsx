import React from 'react'
import { Bookmark } from 'lucide-react';
import { Mail } from 'lucide-react';
import { ShieldCheck } from 'lucide-react';


const Card = () => {
  return (
    <div className='h-[460px] w-[360px] rounded-2xl flex flex-col justify-end pb-4 px-8 overflow-hidden
    bg-[url("https://i.pinimg.com/1200x/ba/59/d3/ba59d345efbbdb6c451232aa36302775.jpg")] bg-cover bg-center relative'
    >

      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="relative flex flex-col gap-2 mb-8 text-white z-10">
      <h1 className='text-xl font-semibold flex items-center gap-2'>Natasha Romanoff<ShieldCheck color='green' /></h1>
      <p>I'm a Brand Designer who focuses on clarity & emotional connection.</p>
      </div>

      <div className="relative flex justify-center gap-2 z-10">
        <button className='bg-white text-black font-medium py-4 px-8 rounded-full capitalize flex items-center justify-center gap-2 cursor-pointer hover:scale-95 transition duration-200'><Mail />get in touch</button>
        <button className='bg-gray-800/50 py-2 px-8 rounded-full border border-white backdrop-blur-4xl cursor-pointer hover:scale-95 transition duration-200'><Bookmark color='white'/></button>
      </div>
    </div>
  )
}

export default Card