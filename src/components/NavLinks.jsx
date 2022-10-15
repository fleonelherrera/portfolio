import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/navlinks.css'

const NavLinks = (props) => {

    const { title, route } = props
    return (
        <div>
            <li>
                <NavLink to={route} className='nav-links'>{title}</NavLink>
            </li>
        </div>
    );
}

export default NavLinks;