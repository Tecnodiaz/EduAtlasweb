import  '../index.css';
import { Styledtopnavbar,Tareashome,Styledposter } from './styles'
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
                <BottomNavbar/>
                </>
            )
}
export default  Home