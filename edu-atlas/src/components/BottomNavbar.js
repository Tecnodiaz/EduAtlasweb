import {  Nav,Navbar} from 'react-bootstrap';
import  '../index.css';
import { Styledbottomnavbar, } from './styles'
import {Link} from 'react-router-dom';

function BottomNavbar() {
  return (
<>
   

    <Styledbottomnavbar>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="sticky-nav">
  
  <Link className="navbar-brand"to="/">Home</Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className='ml-auto'>
      <Nav.Link href="#features" >Libreria</Nav.Link>
      <Nav.Link href="#pricing">Asistencia</Nav.Link>
      <Link className="nav-link" to="/horario">Horario</Link>
      <Nav.Link href="#Perfil">Perfil</Nav.Link>
    </Nav>
   
  </Navbar.Collapse>
  
</Navbar>

    </Styledbottomnavbar>


    </>
   
    
    );
}
export default BottomNavbar;

