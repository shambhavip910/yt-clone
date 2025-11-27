import React from 'react'

function VideoCard({ info }) {

  const { snippet, statistics } = info
  const { channelTitle, title, thumbnails } = snippet

  return (
    <div className='w-72 p-2 m-2 '>
      <img className='rounded-lg' src={thumbnails.medium.url} alt="" />
      <ul>
        <li className='font-bold py-1'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} </li>
      </ul>
    </div>
  )
}

export const Advdo=({info})=>{
  return (
    <div className=' border border-red-700'><VideoCard info={info}/></div>
  )
}

export default VideoCard
