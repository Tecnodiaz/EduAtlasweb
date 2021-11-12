import  '../index.css';
import { Styledtopnavbar,Styledposter, Styledposts,Styledadvertisement,Styledpostcoment } from '../components/styles'
import  BottomNavbar  from '../components/BottomNavbar'
import{AiOutlineSend} from 'react-icons/ai'
import { useEffect,useState} from 'react';
import axios from 'axios';
import HomeWorkComponent from '../components/HomeWorkComponent'
import {
    BrowserRouter as Router,
    Switch, Route, Link
  } from "react-router-dom"
import VerTareas from './VerTareas'


function Home() {
  const [page, setPage] = useState('home')

  const toPage = (page) => (event) => {
     event.preventDefault()
     setPage(page)
   }
 
   const content = () => {
     if (page === 'tareas') {
       return <VerTareas />
     
   }
   }
    const [tareas, setTareas] = useState([])
 
// run npm run dev to start the server
    const getTareas = async () => {
        try {
            const response = await axios.get(' http://localhost:3001/tareas');
           setTareas(response.data)
            
          } catch (error) {
            console.error(error);
          }
    
    }


    useEffect   (() => {
       
        getTareas()
           
    }, []);

    const mrleft = {
        marginLeft: '300px'
        
    }

            return(
                <>
               
                <Styledtopnavbar>
                <div className="topnav" id="myTopnav">
                  <li  onClick={toPage('tareas')}>Tareas</li>
                  
                  <li onClick={toPage('tareas')}>Calificaciones</li> 
                  
                 
                    
                </div>
                    </Styledtopnavbar>
                
                    <HomeWorkComponent tareas={tareas}/>
                <Styledposter>
                <h1>Comunicate</h1>
                <textarea placeholder="Escribe el comunicado" />
                <button type="submit">Publicar</button>
                </Styledposter>
                <Styledposts>
                    <h1>Jeremy Daniel Perez Jerez</h1>
                    <h2>Comentarios</h2>
                    
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                    </p>
                    <Styledpostcoment>
                    <a href="http://tecnodiaz.com">JP</a>
                    <textarea placeholder="Escribe tu comentario" />
                    <button type="submit"><AiOutlineSend color="white" size="medium" /></button>
                    </Styledpostcoment>
                </Styledposts>
                <Styledadvertisement>
                <h1>Publicidad</h1>
               
                            </Styledadvertisement> 

                <BottomNavbar/>
                {content()}
                </>
            )
        }

export default  Home