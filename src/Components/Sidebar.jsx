import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  const ismenuopen=useSelector(store=>store.app.isOpen);
  if(!ismenuopen) return null;
  return (
    <div className=' h-auto max-h-screen overflow-y-auto overflow-x-hidden w-60 pt-15' >
      <div className='p-4'>
        <ul  className='space-y-1.5'>
        <li><Link to='/'>Home</Link></li>
        <li>Shorts</li>
        <li>Subscription</li>
      </ul>
      </div>
        <hr className="border-t border-gray-300" />
      <div className='p-4'>
        <h1 className=' font-extrabold'>You</h1>
        <ul className='space-y-1.5'>
          <li>History</li>
          <li >Playlist</li>
          <li>Your Videos</li>
          <li>Your Courses</li>
          <li>Liked Videos</li>
        </ul>
      </div>
        <hr className="border-t border-gray-300" />
      <div className='p-4'>
        <h1 className=' font-bold'>Subscriptions</h1>
        <ul  className='space-y-1.5'>
          <li>TakeUForward</li>
          <li>Aditya Verma</li>
          <li>Akshay Saini</li>
          <li>Code With Harry</li>
        </ul>
      </div>
      <hr className="border-t border-gray-300" />
      <div className='p-4'>
        <h1 className=' font-bold'>Explore</h1>
        <ul  className='space-y-1.5'>
          <li>Music</li>
          <li>Film</li>
          <li>Live</li>
          <li>Gaming</li>
        </ul>
      </div>
        <hr className="border-t border-gray-300" />
      <div className='p-4'>
        <h1 className=' font-bold'>More from Youtube</h1>
        <ul  className='space-y-1.5'>
          <li>Youtube Premium</li>
          <li>Youtube Studio</li>
          <li>Youtube Music</li>
          <li>Youtube Kids</li>
        </ul>
      </div>
        <hr className="border-t border-gray-300" />
      <div className='p-4'>
        <ul  className='space-y-1.5'>
          <li>Setting</li>
          <li>Report History</li>
          <li>Help</li>
          <li>Send Feedback</li>
        </ul>
      </div>
        <hr className="border-t border-gray-300" />
      <div className='space-y-2 text-gray-500 my-4 mx-2'>
        <p>AboutPressCopyrightContact usCreatorAdvertiseDevelopers</p>
        <p>TermsPrivacyPolicy & SafetyHow YouTube worksTest new features</p>
        <p>© 2025 Google LLC</p>
      </div>
    </div>
  )
}

export default Sidebar
