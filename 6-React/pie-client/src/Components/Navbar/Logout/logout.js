import React from 'react';
import './logout.css';
import logout from '../../../assets/logout.svg';

const Logout = (props) => {

    return (

        <img className="logout-img" src={logout} alt="logout icon" onClick={props.logout} />      

    )
}

export default Logout;