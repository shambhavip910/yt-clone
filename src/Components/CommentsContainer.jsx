import React from 'react'
import Comments from './Comments'
import { commentsData } from '../assets/constants'

const Commentlist=({comments})=>{
    return comments.map((comment,index)=>(
    <div key={index}>
        <Comments  data={comment}/>
        <div className='pl-5 border-l-2 border-black ml-5'>
            <Commentlist  comments={comment.replies} />
        </div>
    </div>
    ));
};
const CommentsContainer = () => {
  return (
    <div>
      <h1 className='text-2xl font-bold m-4 p-2'>Comments:</h1>
      <div>
       {/* <Comments data={commentsData[0]}/> */}
       <Commentlist comments={commentsData}/>
      </div>
    </div>
  )
}

export default CommentsContainer
