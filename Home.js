import  '../index.css';
import { Styledtopnavbar,Styledposter,Styledadvertisement,Styledtareashome,Styledposts } from '../components/styles'
import  BottomNavbar  from '../components/BottomNavbar'
import Posts from '../components/Posts'
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
    'a new note...'
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
        console.log('button clicked', event.target)
      }

      const handlePostChange = (event) => {
        console.log(event.target.value)
        setNewPost(event.target.value)
      }
      
     
            return(
                <div>
               
                <Styledtopnavbar>
                <div className="topnav" id="myTopnav">
                <Link to="/tareas">Tareas</Link>
                   <Link to="/" >Calificaciones</Link>
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
                  <button type="submit">Publicar</button>
                  </form>
                  </Styledposter>
                  

                  {posts.map(post => (
                     <Styledposts  key={post.id} >
                       <Posts post={post} />
                       </Styledposts>
                   ))}
                  

                <BottomNavbar/>
             
                </div>
            )
        }

export default  Home