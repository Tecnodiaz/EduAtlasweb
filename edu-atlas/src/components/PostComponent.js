import React from 'react'
import{AiOutlineSend} from 'react-icons/ai'
import {Styledpostcoment}from './styles'

function PostComponent({onChange,newComment,addComment}) {


  
    return (
        <Styledpostcoment>
        <a href="http://tecnodiaz.com">JP</a>
       
       
        <form onSubmit={addComment}>
        <textarea
         placeholder="Escribe tu comentario" 
        onChange={onChange}
        value={newComment}
        />
        <button type="submit">
          <AiOutlineSend color="white" size="medium"  />
        </button>
        </form>
      </Styledpostcoment>
    )
}

export default PostComponent
