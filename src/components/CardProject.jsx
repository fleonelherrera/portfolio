import '../styles/cardproject.css'

const CardProject = (props) => {

    let {title, img, description} = props
    return (
        <div>
            <a href='#' target='_blank' rel='noreferrer noopener' className='container-card'>
                <h1>{title}</h1>
                <img src={img} alt="Captura de la página de inicio del proyecto" className='img-card'/>
                <p>{description}</p>
            </a>
        </div>
    );
}

export default CardProject;