import React from 'react'
import { Styledpostcoment,Styledposts} from '../components/styles'
import{AiOutlineSend} from 'react-icons/ai'

function Posts({post}) {
    const ulstyle = {
        listStyle: 'none',
        padding: '0',
        margin: '0'
    }
    return (
      
     
<>
        
            
        <h1>{post.usuario}</h1>
        <h2>Comentarios</h2>

 <ul style={ulstyle}>
        <li>
            {post.descripcion}

        </li>
        </ul>
       
        <Styledpostcoment>
                <a href="http://tecnodiaz.com">JP</a>
                <textarea placeholder="Escribe tu comentario" />
                <button type="submit">
                    <AiOutlineSend color="white" size="medium" />
                    </button>
            </Styledpostcoment>
           
            
            </>
        


          
          
          
        
      
                  
             
             
           
           
    
    )
}

export default Posts
