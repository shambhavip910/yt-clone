import React, { useEffect, useState } from 'react'
import { YOUTUBE_URL } from '../assets/constants';
import VideoCard, { Advdo } from './VideoCard';
import { Link } from 'react-router-dom';

const VdoContainer = () => {
  const [videos,setvideos]=useState([]);
  
  useEffect(()=>{
    getvideos();
  },[])
  const getvideos=async () => {
    const fetchdata=await fetch(YOUTUBE_URL)
    const json=await fetchdata.json();
    // console.log(json.items);
    setvideos(json.items)
  }
  return (
    <div className='flex flex-wrap'>
     {videos.length > 0 && <Advdo info={videos[0]} />}
     {videos.map(video => <Link key={video.id} to={"/watch?v="+video.id}><VideoCard  info={video}/></Link>)}
    </div>
  )
}

export default VdoContainer
