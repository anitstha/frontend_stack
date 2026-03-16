import React from 'react'

const Button = ({ value }) => {
    return (
        <button type='submit' className='bg-black text-white font-bold py-2 px-8 rounded-full cursor-pointer hover:bg-black/80 active:scale-98'>
            {value}
        </button>
    )
}

export default Button