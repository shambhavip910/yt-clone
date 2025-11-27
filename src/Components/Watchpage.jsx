import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const Watchpage = () => {
  const dispatch = useDispatch();
  const [searchparam] = useSearchParams();
  const videoid = searchparam.get("v");
  // const [isdarktheme,setisdarktheme]=useState(false);
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
      // <div className={`m-2 p-2 pt-20 flex ${isdarktheme && "bg-black text-amber-50"}`}>
      <div className='m-2 p-2 pt-20 flex '>

      {/* <button className='h-10 w-20 bg-red-400' onClick={()=>setisdarktheme(!isdarktheme)}>Theme</button>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nobis non a voluptatibus dolor aliquid unde voluptatum veritatis cumque molestias. */}
      <div>
      
        <iframe className='rounded-lg' width="1000" height="500" src={`https://www.youtube.com/embed/${videoid}?si=CoavqNN0sIWjO8i9`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <CommentsContainer />
      </div>
      <div className='w-full' >
        <LiveChat/>
      </div>
    </div>

  )
}

export default Watchpage
