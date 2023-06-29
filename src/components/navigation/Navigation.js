import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import './Navigation.css'

function Navigation( {data, handleLogout}) {
	return (
		<Navbar expand="lg">
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="me-auto">
					{/* <Nav.Link href="#thoiki">Các Thời Kì</Nav.Link> */}
					<Link style={{ textDecoration: 'none' }} to="/"><Nav.Link href="#home">Home</Nav.Link></Link>
					<Link style={{ textDecoration: 'none' }} to="/dashboard"><Nav.Link href="#dashboard">DashBoard</Nav.Link></Link>
					<Link style={{ textDecoration: 'none' }} to="/contact"><Nav.Link href="#contact">Contact</Nav.Link></Link>
				</Nav>
				{/* <Link to="./login">
            <button style={{ backgroundColor: '#FFC701', color: 'black', padding: '10px 30px', borderRadius: '25px', fontWeight:'bold' }} className='btn'>
              Login 
            </button>
          </Link> */}
		  		<div>
		  	{data ? (
				
					<Button variant="contained" color="error" onClick={handleLogout}>
						Sign-out
					</Button>
				
				) : (
					<Button  variant="contained" color="success" component={NavLink} to="/login">
						Login
					</Button>
					
				)}
				</div>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default Navigation
