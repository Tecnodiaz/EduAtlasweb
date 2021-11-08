import {  Nav,Navbar, Container } from 'react-bootstrap';
import  '../index.css';
import { Styledbottomnavbar} from './styles'
function BottomNavbar() {
  return (

    <Styledbottomnavbar>    
            
         <Container>
          
      
  
  
 
    <Nav className="me-auto">

  <Navbar.Brand href="#home">Home</Navbar.Brand>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
    
 
  
  
  

</Container>


         
    </Styledbottomnavbar>
    
    );
}
export default BottomNavbar;

