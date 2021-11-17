import  '../index.css';
import { Styledtopnavbar,Styledposter,Styledadvertisement,Styledtareashome,Styledposts} from '../components/styles'
import  BottomNavbar  from '../components/BottomNavbar'
import PostComponent from '../components/PostComponent'
import { useEffect,useState} from 'react';
import tareasService from '../services/tareas'
import Tareas from '../components/Tareas'

import postService from '../services/post'
import {
 Link
  } from "react-router-dom"



function Home() {
  
    const [tareas, setTareas] = useState([])
   const [newPost, setNewPost] = useState(
    ''
  ) 
  const [posts, setPost] = useState([])
 
  

    


    useEffect   (() => {
       
        tareasService.getTareas().then(response => {
            setTareas(response)
            })
           
    }, []);

    useEffect(() => {
        postService.getAllPosts().then(response => {
            setPost(response)
            
        }
        )
      
    }, [])
   
  
    
    const addPost = (event) => {
      event.preventDefault()
      const postObject = {
        descripcion: newPost,
        fecha: new Date().toISOString(),
        usuario: 'Daniel',
        id: posts.length + 1,
      }
      if(newPost === undefined || newPost === ''){
        alert('No puedes dejar el campo vacio')
      }else{
      postService.addPost(postObject).then(response => {
        
        setPost([...posts, response])
      setNewPost('')
      })
    }
    }

      const handlePostChange = (event) => {
     
        setNewPost(event.target.value)
      }
     
    const mrbottom2 = {
      marginBottom: '-350px',
    marginTop: '307px',

    }
      //para ponerle las letras a la vaina de comentar toma la primera letra del nombre del usuario y la del apellido con la primera letra en mayuscula con charAt(0)
    
            return(
               
<div>
                <Styledtopnavbar>
                  <div className="topnav" id="myTopnav">
                    <Link to="/tareas">Tareas</Link>
                    <Link to="/">Calificaciones</Link>
                  </div>
                </Styledtopnavbar>

                <Styledtareashome>
                  <h1>Tareas del mes</h1>
                  <ul>
                    {tareas.map(tarea => (
                      <Tareas key={tarea.id} tarea={tarea} />
                    ))}
                  </ul>
                </Styledtareashome>



                <Styledadvertisement>
                  <h1>Publicidad</h1>

                </Styledadvertisement>

                <Styledposter>

                  <h1>Comunicate</h1>
                  <form onSubmit={addPost}>
                    <textarea
                     placeholder="Escribe el comunicado" 
                    value={newPost}
                      onChange={handlePostChange}
                      maxLength={465}
                       />
                      		

                    <button 
                    type="submit"
                    disabled={!newPost||newPost===''}
                   
                    >Publicar</button>
                  </form>
                </Styledposter>

                <div className="mr-bottom">
                {posts.map(post => (
                  <div key={post.id} >
                  <Styledposts >
                    <h1>{post.usuario}</h1>
                    <h2>Comentarios</h2>

                    <p>
                      {post.descripcion}
                    </p>
                  

                  </Styledposts>
                    <div style={mrbottom2}> 
                   
                  <PostComponent />
                  </div>
                  </div>
                  
                ))}
                </div>



              <BottomNavbar/>
             
              
            </div>
             
            )
        }

export default  Home
