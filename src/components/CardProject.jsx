import '../styles/cardproject.css'

const CardProject = (props) => {

    let {title, img, description, linkDemo, linkRepo} = props
    return (
        <div>
            <div className='container-card'>
                <div className='card-img'>
                    <img src={img} alt="Miniatura del proyecto seleccionado"/>
                </div>

                <div className='info-card'>
                    <h1>{title}</h1>
                    <p>{description}</p>

                    <a href={linkDemo} target='_blank' rel='noreferrer noopener'>DEMO</a>
                    <a href={linkRepo} target='_blank' rel='noreferrer noopener'>REPO</a>
                </div>

            </div>
        </div>
    );
}

export default CardProject;