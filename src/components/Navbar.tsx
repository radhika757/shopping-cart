import React from 'react'
import { Button,Container, Navbar as NavbarBs,Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
    <NavbarBs sticky='top' className='bg-white shadow-sm mb-3 p-3'>
<Container>
   <Nav className='me-auto'>
    <Nav.Link as={NavLink} to="/" > Home </Nav.Link>
    <Nav.Link as={NavLink} to="/store" > Store </Nav.Link>
    <Nav.Link as={NavLink} to="/about" > About </Nav.Link>
   </Nav>
   {/* Add a SVG here later! */}
   <Button  style={{position:"relative"}} className='btn-success'>Cart <div className='rounded-circle bg-danger d-flex justify-content-center align-items-center' style={{color:"white", width:"1.5rem",height:"1.5rem",position:"absolute", left:"40px", bottom:"20px"}}>4</div></Button> 
</Container>
    </NavbarBs>
   
    </>
  )
}

export default Navbar
