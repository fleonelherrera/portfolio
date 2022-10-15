import { useState } from "react";
import NavLinks from "./NavLinks";

import '../styles/navbar.css'

const NavBar = () => {

    const [activeClass, setActiveClass] = useState(false)

    const handleClick = () => {
        setActiveClass(!activeClass)
    }

    return (
        <div>
            <header className='header'>
                <div className='logo'>
                    Portafolio Personal
                </div>
                <div className="burger" onClick={handleClick} >
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <nav className={`nav-bar ${activeClass ? 'active' : ''}`}>
                    <ul>
                        <NavLinks title='INICIO' route='/'/>
                        <NavLinks title='SOBRE MI' route='/aboutme'/>
                        <NavLinks title='PROYECTOS' route='/projects'/>
                        <NavLinks title='CONTACTO' route='/contact'/>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default NavBar;