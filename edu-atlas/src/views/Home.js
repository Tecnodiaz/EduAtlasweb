import  '../index.css';
import { Styledtopnavbar,Styledposter,Styledadvertisement,Styledtareashome,Styledposts,Styledpostcoment } from '../components/styles'
import  BottomNavbar  from '../components/BottomNavbar'
import Posts from '../components/Posts'
import { useEffect,useState} from 'react';
import tareasService from '../services/tareas'
import Tareas from '../components/Tareas'
import{AiOutlineSend} from 'react-icons/ai'
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
                    <textarea placeholder="Escribe el comunicado" value={newPost}
                      onChange={handlePostChange} />
                    <button disabled={!newPost||newPost===''}type="submit">Publicar</button>
                  </form>
                </Styledposter>

                <div className="mr-bottom">
                {posts.map(post => (
                  
                  <Styledposts key={post.id} >
                    <Posts  post={post} />

                    <Styledpostcoment>
                      <a href="http://tecnodiaz.com">JP</a>
                      <textarea placeholder="Escribe tu comentario" />
                      <button type="submit">
                        <AiOutlineSend color="white" size="medium" />
                      </button>
                    </Styledpostcoment>
                  </Styledposts>
                 
                ))}
                </div>
              
              <BottomNavbar />
              
            </div>
             
            )
        }

export default  Home