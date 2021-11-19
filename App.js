import './App.css';
import Home from './views/Home'
import {
  BrowserRouter as Router,
  Switch, Route, 
} from "react-router-dom"
import VerTareas from '../src/views/VerTareas'

  
function App() {
  
  return( 
    <Router>
    <div className="container">

          
      <Switch>
        <Route path="/tareas">
          <VerTareas />
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
