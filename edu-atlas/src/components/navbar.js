import {  Nav,Navbar} from 'react-bootstrap';
import  '../index.css';
import { Styledbottomnavbar} from './styles'
function BottomNavbar() {
  return (

    
    <Styledbottomnavbar>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="sticky-nav">
  
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className='ml-auto'>
      <Nav.Link href="#features" >Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
   
  </Navbar.Collapse>
  
</Navbar>

    </Styledbottomnavbar>


         
   
    
    );
}
export default BottomNavbar;

