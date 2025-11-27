import React from 'react'
import {  USER_URL } from '../assets/img';

const Comments = ({data}) => {
    const {name,text}=data;
    return (
        <div className='flex bg-gray-100 p-2 rounded-lg my-2'>
            <img className='w-16 h-10' src={USER_URL} alt="" />
            <div className='px-3'>
                <p className='font-bold'>{name}</p>
                 <p>{text}</p>
            </div>
        </div>
    )
}

export default Comments


