import React from 'react'
import Sidebar from './Sidebar';
import MainContainer from './MainContainer';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

const Body = () => {
  const ismenuopen=useSelector(store=>store.app.isOpen)
  return (
    <div className='flex'>
      {ismenuopen && <Sidebar/>}
      <div className={`transition-all duration-300 flex-1`}>

       <Outlet/>
      </div>
    </div>
  )
}
 export default Body;

