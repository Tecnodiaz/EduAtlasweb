import  '../index.css';
import { Styledtopnavbar,Tareashome,Styledposter, Styledposts } from './styles'
import  BottomNavbar  from './BottomNavbar'

function Home() {
            return(
                <>
                <Styledtopnavbar>
                <div class="topnav" id="myTopnav">
                  <a href="#home" >Tareas</a>
                  
                  <a href="#contact" >Calificaciones</a>
                  
                 
                    
                </div>
                    </Styledtopnavbar>
                
                    <Tareashome>
                      <h1>Tareas del mes</h1>
                      <ul> 
                        <li >Ejercicios de pitagoras</li>
                        <li>2021-08-30</li>
                        <li >30pts</li>
                         </ul>
                    </Tareashome>
                <Styledposter>
                <h1>Comunicate</h1>
                <textarea placeholder="Escribe el comunicado" />
                <button type="submit">Publicar</button>
                </Styledposter>
                <Styledposts>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                    </p>
                </Styledposts>
                <BottomNavbar/>
                </>
            )
}
export default  Home