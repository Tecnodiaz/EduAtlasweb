import React from 'react'



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
      
       
       
            
            </>
        


          
          
          
        
      
                  
             
             
           
           
    
    )
}

export default Posts
