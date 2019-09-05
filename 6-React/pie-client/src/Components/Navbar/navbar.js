import React from 'react';
import './navbar.css';
import piePic from '../../assets/pie.svg';
import Logout from './Logout/logout';

const Navbar = (props) => { // props are paramters we can pass into our functional components. functional copomemnts are cons navbar through export statement


    return ( 

        // this is JSX - it looks like HTML but it's really Javascript

        <nav>

            <img className="nav-img" src={piePic} alt="pie pic" />

            

            <h1>Pie Client</h1>

            <Logout />
            

        </nav>
    )

}

export default Navbar;