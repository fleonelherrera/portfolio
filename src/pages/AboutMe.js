import React from 'react';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import '../styles/aboutme.css'

import profilePicture2 from '../assets/profile-picture2.png'

function AboutMe() {
    return (
        <div className="App">
            <NavBar />

            <main role='main'>
            <section className="aboutme-container">
                <article className="aboutme-section">
                    <div className='container-main-content'>
                        <div className='container-info'>
                            <h1>¡Hola!</h1>
                            <p>Soy Franco, tengo 22 años, soy de Buenos Aires y estoy en búsqueda de mi primera experiencia dentro del rubro IT. Actualmente estoy cursando el segundo año de la Tecnicatura en Programación en la UNQ. Además, acabo de finalizar un curso de Desarrollo Web Fullstack en Educación IT. Accedí a esta capacitación gracias a una beca que me otorgaron Fundación Pescar y JP Morgan. Por otro lado, formé parte del programa digit@lers, de Telecom, en el que aprendí Desarrollo Web con .Net.</p>
                        </div>
                        <div className='skills-container'>
                            <h2>Habilidades</h2>
                            <div className='skills-list-container'>
                                <div className='skill-container'>HTML5</div>
                                <div className='skill-container'>CSS3</div>
                                <div className='skill-container'>Javascript</div>
                                <div className='skill-container'>React JS</div>
                                <div className='skill-container'>Node JS</div>
                                <div className='skill-container'>.Net</div>
                                <div className='skill-container'>MongoDB</div>
                                <div className='skill-container'>SQL</div>
                                <div className='skill-container'>GIT</div>
                            </div>
                        </div>
                        <div className='container-btn'>
                            <a href='https://www.educacionit.com/perfil/franco-leonel-herrera-806759' target='_blank' rel='noreferrer noopener' className='link-aboutme'>Certificaciones</a>
                        </div>
                    </div>
                    <div className='container-img-aboutme'>
                        <img src={profilePicture2} alt="Foto de perfil" className='container-img-aboutme'/>
                    </div>
                </article>
            </section>
            </main>

            <footer>
                <Footer />
            </footer>



        </div>
    );
}

export default AboutMe;