import React, { useState } from 'react'
import {firestore} from '../firebase'
import { useFormInput } from '../hook'

const CreatePost = () => {
    const title  = useFormInput('') // now an object
    const subtitle = useFormInput('')
    const content  = useFormInput('')

    function handleSubmit(e){
        e.preventDefault();
        console.log('title ' , title)
        console.log('Subtitle ' , subtitle)
        console.log('content ' , content)

         firestore.collection('posts').add({
            title: title.value,
            content : content.value,
            subtitle: subtitle.value,
            createdAt : new Date()
         })   
    }


  return (
    <div className='create-post' >
        <h1>CreatePost</h1>
        <form onSubmit={handleSubmit} action="">
            <div className="form-field">
                <label>Title</label>
                <input {...title} type="text" />
            </div>

            <div className="form-field">
                <label>Sub Title </label>
                <input {...subtitle} type="text" />
            </div>

            <div className="form-field">
                <label> Content</label>
                <textarea {...content} name="" id="" cols="30" rows="10"></textarea>
            </div>
            <button className='create-post-btn'>Create-Post-Btn</button>
        </form>
    </div>
  )
}

export default CreatePost