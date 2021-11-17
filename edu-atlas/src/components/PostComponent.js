import React from 'react'
import{AiOutlineSend} from 'react-icons/ai'
import {Styledpostcoment}from './styles'

function PostComponent() {
    return (
        <Styledpostcoment>
        <a href="http://tecnodiaz.com">JP</a>
        <textarea placeholder="Escribe tu comentario" />
        <button type="submit">
          <AiOutlineSend color="white" size="medium" />
        </button>
      </Styledpostcoment>
    )
}

export default PostComponent
