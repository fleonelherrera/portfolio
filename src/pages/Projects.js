import React from 'react';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import CardProject from '../components/CardProject';

import '../styles/projects.css'

import profilePicture1 from '../assets/profile-picture1.png'

import moviesProject from '../assets/miniatura-proyecto-peliculas.png'
import productsListProject from '../assets/miniatura-lista-articulos.png'
import toDoProject from '../assets/miniatura-todoapp.png'

//import enConstruccion from '../assets/proyecto-en-desarrollo.png'


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
                                description='Página web que consume la API de The Movie DB y muestra las películas más populares de manera actualizada.'
                                linkDemo = 'https://peliculas-populares.vercel.app/'
                                linkRepo = 'https://github.com/fleonelherrera/peliculas-mas-populares'
                            />
                            <CardProject
                                title='Lista de artículos'
                                img={productsListProject}
                                description='Página web en la que se pueden guardar, editar y eliminar artículos de una base de datos. Realizada con Node (express), MongoDB y Handlebars.'
                                linkDemo = 'https://lista-articulos.up.railway.app/'
                                linkRepo = 'https://github.com/fleonelherrera/lista-articulos'
                            />
                            <CardProject
                                title='Lista de tareas'
                                img={toDoProject}
                                description='Página web realizada con React en la que se pueden listar tareas para hacer, se las puede marcar como realizadas y se cuenta con un contador de tareas pendientes.'
                                linkDemo = 'https://to-do-list-woad-one.vercel.app/'
                                linkRepo = 'https://github.com/fleonelherrera/to-do-list'
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