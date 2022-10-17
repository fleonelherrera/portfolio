import React from 'react';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import '../styles/aboutme.css'

import profilePicture2 from '../assets/profile-picture2.png'
import htmlLogo from '../assets/html-logo.png'
import cssLogo from '../assets/css-logo.png'
import javascriptLogo from '../assets/javascript-logo.png'
import nodeLogo from '../assets/node-logo.png'
import mongodbLogo from '../assets/mongodb-logo.png'
import reactLogo from '../assets/react-logo.png'
import gitLogo from '../assets/git-logo.png'
import csharpLogo from '../assets/csharp-logo.png'
import sqlLogo from '../assets/sql-logo.png'

function AboutMe() {
    return (
        <div className="App">
            <NavBar />

            <main role='main'>

                <section className="container">
                    <article className="aboutme-section">
                        <div className='text-container'>
                            <h1>¡Hola!</h1>
                            <p>Soy Franco, tengo 22 años y soy de Buenos Aires. Actualmente me encuentro cursando la Tecnicatura en Programación en la Universidad Nacional de Quilmes. Además, acabo de certificarme como Desarrollador Web Fullstack en Educación IT, capacitación a la que accedí gracias a una beca que me fue otorgada por Fundación Pescar y JP Morgan. Otra de las capacitaciones que realicé es la de Desarrollo Web con .Net, en el programa digit@lers de Telecom. Personalmente me gusta más programar del lado del servidor, ya sea utilizando NodeJS o .Net. </p>
                            <h2 className='skills-title'>Habilidades</h2>
                            <img src={htmlLogo} alt='' className='skills-logo html-logo' />
                            <img src={cssLogo} alt='' className='skills-logo' />
                            <img src={javascriptLogo} alt='' className='skills-logo' />
                            <img src={nodeLogo} alt='' className='skills-logo' />
                            <img src={mongodbLogo} alt='' className='skills-logo' />
                            <img src={reactLogo} alt='' className='skills-logo' />
                            <img src={csharpLogo} alt='' className='skills-logo' />
                            <img src={sqlLogo} alt='' className='skills-logo' />
                            <img src={gitLogo} alt='' className='skills-logo' />
                            <a href='https://www.educacionit.com/perfil/franco%20leonel-herrera-806759' target='_blank' rel='noreferrer noopener' className='ver-cv'>Certificaciones</a>
                            <a href='https://drive.google.com/file/d/148ch5jzEtdfCPUgCWW6VQoHAhOxSKjkR/view?usp=sharing' target='_blank' rel='noreferrer noopener' className='ver-cv'>Materias aprobadas (Actualizado: 17/10/2022)</a>
                        </div>
                        <img src={profilePicture2} alt="Foto de perfil" className='img-about-me'/>
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