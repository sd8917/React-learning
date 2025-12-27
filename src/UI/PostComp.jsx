import React from 'react'

const PostComp = ({title, data}) => {
 
          if (!data) return <div>Loading...</div>;

          
  return (
    <div>
      <h1 >{title}</h1>
            <ul>
        {data.map((post, index)=>{
          return <li key={index}>{post.title}</li>
        })}
        </ul>
    </div>
  )
}

export default PostComp
