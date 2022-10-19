import React from 'react';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import '../styles/aboutme.css'

// import profilePicture2 from '../assets/profile-picture2.png'
// import htmlLogo from '../assets/html-logo.png'
// import cssLogo from '../assets/css-logo.png'
// import javascriptLogo from '../assets/javascript-logo.png'
// import nodeLogo from '../assets/node-logo.png'
// import mongodbLogo from '../assets/mongodb-logo.png'
// import reactLogo from '../assets/react-logo.png'
// import gitLogo from '../assets/git-logo.png'
// import csharpLogo from '../assets/csharp-logo.png'
// import sqlLogo from '../assets/sql-logo.png'

function AboutMe() {
    return (
        <div className="App">
            <NavBar />

            <main role='main'>
            <section className="container">
                <article className="main-section">
                    <h1>No mires esto</h1>
                    <h2>😡😡</h2>
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