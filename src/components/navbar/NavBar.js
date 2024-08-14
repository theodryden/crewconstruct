import React from 'react';
import './NavBar.css';
import LoginButton from '../buttons/loginbutton/LoginButton';



const NavBar = () => {
  return (
    
    <ul className='navbar-container'>
        <li>ConstructHire</li>
        <li>Home</li>
        <li>Explore</li>
        <li>Post a job</li>
        <li>Search</li>
        <LoginButton />
    </ul>

  )
}

export default NavBar
