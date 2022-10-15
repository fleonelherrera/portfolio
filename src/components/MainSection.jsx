import '../styles/mainsection.css'
import profilePicture3 from '../assets/profile-picture3.png'



const MainSection = () => {
    return (
        <div>
            <section className="container">
                <article className="main-section">
                    <img src={profilePicture3} alt="Foto de perfil" className='pic-main-section'/>
                    <h1>Franco Leonel Herrera</h1>
                    <h2>Desarrollador Backend 🖥️</h2>
                    <a href='https://drive.google.com/file/d/1jBl_zeIc1IiPMe9QUOHEdF5MqLKsJzR6/view?usp=sharing' target='_blank' rel='noreferrer noopener' className='ver-cv'>Mi CV</a>
                </article>
            </section>
        </div>
    );
}

export default MainSection;