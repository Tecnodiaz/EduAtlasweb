import {  Nav,Navbar} from 'react-bootstrap';
import  '../index.css';
import { Styledbottomnavbar, Styledtopnavbar } from './styles'
function BottomNavbar() {
  return (
<>
    <Styledtopnavbar>
<div class="topnav" id="myTopnav">
  <a href="#home" >Tareas</a>
  
  <a href="#contact" >Calificaciones</a>
  
 
    
</div>
    </Styledtopnavbar>


    <Styledbottomnavbar>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="sticky-nav">
  
  <Navbar.Brand href="#home">Home</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className='ml-auto'>
      <Nav.Link href="#features" >Libreria</Nav.Link>
      <Nav.Link href="#pricing">Asistencia</Nav.Link>
      <Nav.Link href="#deets">Horario</Nav.Link>
      <Nav.Link href="#Perfil">Perfil</Nav.Link>
    </Nav>
   
  </Navbar.Collapse>
  
</Navbar>

    </Styledbottomnavbar>


    </>
   
    
    );
}
export default BottomNavbar;

