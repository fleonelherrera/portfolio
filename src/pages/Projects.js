import React from 'react';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import CardProject from '../components/CardProject';

import '../styles/projects.css'

import profilePicture1 from '../assets/profile-picture1.png'
import enConstruccion from '../assets/proyecto-en-desarrollo.png'
import moviesProject from '../assets/miniatura-proyecto-peliculas.png'


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
                                title='Películas populares'
                                img={moviesProject}
                                description='Página no responsive que consume la API de The Movie DB y muestra las películas más populares de manera actualizada.'
                                linkDemo = 'https://peliculas-populares.vercel.app/'
                                linkRepo = 'https://github.com/fleonelherrera/peliculas-mas-populares'
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