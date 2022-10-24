import React from 'react';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Projects = () => {
    return (
        <div>
            <NavBar />

            <main role='main'>

                <section className="container">
                    <article className="main-section">
                        <h1>En construcción ⚒</h1>
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