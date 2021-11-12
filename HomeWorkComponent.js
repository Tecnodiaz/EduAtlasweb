import React from 'react'
import {Styledtareashome} from './styles'

function HomeWorkComponent({tareas}) {
    return (
        <Styledtareashome>
        <h1>Tareas del mes</h1>
     

          
                  
         
            
      
          
          
          
              
          {tareas.map(
                  tarea => (
                    <ul key={tarea.id}>
          <li >{tarea.nombre}</li>
            <li >{tarea.descripcion}</li>
            <li >{tarea.fecha}</li>
          
          </ul>
          
          ))}
          
        
      
                  
             
             
           
           
          
      </Styledtareashome>
    )
}

export default HomeWorkComponent
