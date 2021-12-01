import './App.css';
import Home from './views/Home'
import {
  BrowserRouter as Router,
  Switch, Route, 
} from "react-router-dom"
import VerTareas from '../src/views/VerTareas'
import Horario from '../src/views/Horario'
  
function App() {
  
  return( 
    <Router>
    <div className="container">

          
      <Switch>
        <Route path="/tareas">
          <VerTareas />
        </Route>
        <Route path="/horario">
          <Horario/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
       
        
        
      </Switch> 

            </div> 
    </Router>
  );
    
  
  
}

export default App;
