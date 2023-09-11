import React, { useEffect, useState } from 'react'
import { firestore } from '../firebase'
import { useParams } from 'react-router-dom'

const PostDetail = () => {
  const[post,setPosts] = useState({})
  const {postId } = useParams()
  useEffect(() =>{
    firestore.collection('posts').doc(postId).get().then((snapshot) => {
      console.log('snapshot',snapshot.data())
      setPosts(snapshot.data( ))
    })
  },[])
  return (
    <div className='post-details'>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
}

export default PostDetail