import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className='px-5 py-0.5 m-2 rounded-lg bg-gray-300 font-medium'>{name}</button>
    </div>
  )
}

export default Button
