import React, { useEffect, useState } from 'react'
import { HAMB_URL, LOGO_URL, SEARCH_URL, USER_URL } from '../assets/img';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../assets/constants';
import { cacheresults } from '../utils/searchSlice';

const Head = () => {
  const [searchQuery, setsearchQuery] = useState("");
  const [suggestions,setsuggestions] = useState([]);
  const [showsuggestions,setshowsuggestions] = useState(false);
  const searchcache=useSelector((store)=>store.search);
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      if(searchcache[searchQuery]){
        setsuggestions(searchcache[searchQuery]);
      }
      else {
          getquery();
      }
    }, 200);
    ///debouncing is happening because the main reason is this return function///
    return () => {
      clearTimeout(timer);
    };



  }, [searchQuery])
  const getquery = async () => {
    console.log(searchQuery)
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
    const json = await data.json();
    // console.log(json[1]);
    setsuggestions(json[1]);
    dispatch(cacheresults({
      [searchQuery]:json[1],
    }))
  };


 
  const Togglemenuhandler = () => {
    dispatch(toggleMenu());
  }
  return (
    <div className='fixed top-0 left-0 right-0 bg-white z-20 shadow-lg grid grid-flow-col p-2 mb-1.5'>

      <div className='flex col-span-1 gap-10 items-center'>
        <img src={HAMB_URL} alt="hamb" className='h-10 cursor-pointer' onClick={() => Togglemenuhandler()} />
        <img src={LOGO_URL} alt="logo" className='h-7' />
      </div>
      <div>
        <div className='col-span-10 flex'>
          <input type="text" placeholder='Search' className=' border border-gray-400 w-xl rounded-l-full p-2 font-medium'
            value={searchQuery}
            onChange={(e) => setsearchQuery(e.target.value)}
            onFocus={()=>setshowsuggestions(true)}
            onBlur={()=>setshowsuggestions(false)}
          />
          <button className="rounded-r-full border border-gray-400 border-l-0 h-12 w-16 flex items-center justify-center bg-gray-100 hover:bg-gray-200">
            <img src={SEARCH_URL} alt="search" className="w-5 h-5" />
          </button>
        </div>
        <div className='absolute z-30  max-h-80 overflow-clip px-5 py-0  bg-white w-xl rounded-lg border-l border-r border-gray-300 m-0.5 shadow-lg'>
        {/* <div className="absolute bg-white rounded-lg shadow-lg w-xl border max-h-80 mt-1 z-30"> */}

          <ul>
           {showsuggestions && suggestions.map((s)=> <li key={s} className=" flex items-center gap-1 hover:bg-gray-100 rounded-lg py-2 px-1"> <img src={SEARCH_URL} alt="search" className="w-5 h-4" />{s}</li>)}
          </ul>
        </div>
      </div>
      <div className='col-span-1'>
        <img src={USER_URL} alt="user" className='h-10 w-16' />
      </div>
    </div>
  )
}

export default Head;
