import React from 'react';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import CardProject from '../components/CardProject';

import '../styles/projects.css'

import profilePicture1 from '../assets/profile-picture1.png'
import enConstruccion from '../assets/proyecto-en-construccion.jpg'


const Projects = () => {
    return (
        <div>
            <NavBar />

            <main role='main'>

                <section className="main-container-projects">
                    <article className="projects-section">
                        <h1 className='title-projects'>Mis Proyectos</h1>
                        <img src={profilePicture1} alt="Foto de perfil" className='img-projects'/>
                        <div className='container-projects'>
                            <CardProject
                                title='Carrito de compras con Login'
                                img={enConstruccion}
                                description='Pequeño e-commerce que cuenta con un Registro/Login y la posibilidad de añadir productos al carrito.'
                            />
                            <CardProject
                                title='Ricardo y Mortardo'
                                img={enConstruccion}
                                description='Página que consume datos de la API de Rick And Morty.'
                            />
                            <CardProject
                                title='Chat Online'
                                img={enConstruccion}
                                description='Chat online utilizando Socket IO.'
                            />
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

export default Projects;