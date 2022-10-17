import '../styles/footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <ul className='social-media'>
                <li>
                    <a href="https://www.linkedin.com/in/francoleonelherrera/" className='link-social-media linkedin' target='_blank' rel='noreferrer noopener'><i className="fa-brands fa-linkedin fa-2xl"></i></a>
                </li>
                <li>
                    <a href="https://walink.co/788f17" className='link-social-media whatsapp' target='_blank' rel='noreferrer noopener'><i className="fa-brands fa-whatsapp fa-2xl"></i></a>
                </li>
                <li>
                    <a href="https://github.com/fleonelherrera" className='link-social-media github' target='_blank' rel='noreferrer noopener'><i className="fa-brands fa-github fa-2xl"></i></a>
                </li>
                <li>
                    <a href="mailto:fleonelherrera@gmail.com" className='link-social-media gmail' target='_blank' rel='noreferrer noopener'><i className="fa-solid fa-envelope fa-2xl"></i></a>
                </li>
            </ul>
        </div>
    );
}

export default Footer;