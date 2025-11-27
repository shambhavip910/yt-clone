import React from 'react'
import { USER_URL } from '../assets/img'
const Chatmessages = ({name,message}) => {
  return (
    <div className='flex items-center hover:bg-gray-200 rounded-lg '>
       <img className='w-10 h-6 bg-none' src={USER_URL} alt="" />
      <span className='font-bold p-2'>{name}</span>
      <span>{message}</span>
    </div>
  )
}

export default Chatmessages
