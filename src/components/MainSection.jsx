import '../styles/mainsection.css'
import profilePicture3 from '../assets/profile-picture3.png'



const MainSection = () => {
    return (
        <div>
            <section className="container">
                <article className="main-section">
                    <img src={profilePicture3} alt="Foto de perfil" className='pic-main-section'/>
                    <h1>Franco Leonel Herrera</h1>
                    <h2>Backend Developer</h2>
                </article>
            </section>
        </div>
    );
}

export default MainSection;