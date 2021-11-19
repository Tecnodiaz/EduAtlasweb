import React from 'react'


function Comments({ comments,post}) {
   
    return (
        
        comments.filter(comment => comment.postId === post.id).map(comment => ( 
            <ul key={comment.id} style={ulstyle}>
            <li style={li}>
              {comment.usuario}
            <br/>
            {comment.descripcion}
            </li>
           </ul>
       
                    
    ))

    )
}


const ulstyle = {
    listStyle: 'none',
    padding: '0',
    margin: '0 ',

 marginRight: '100px',
 marginBottom: '40px',
 marginTop: '-20px',
   
  } 

  const li = {
    display: 'flex',
    width: '70%',
    margin: '0',
    padding: '0',
    marginLeft: '20px',
    borderBottom:'1px solid #e5e5e5',
    background: '#dcdcdc',
    borderRadius: '10px',

    

  
  }

export default Comments
