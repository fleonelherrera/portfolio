import React from 'react';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <div>
            <NavBar />

            <main role='main'>

                <section className="container">
                    <article className="main-section">
                        <h1>¡Ups!</h1>
                        <h2>En construcción</h2>
                    </article>
                </section>

            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Contact;