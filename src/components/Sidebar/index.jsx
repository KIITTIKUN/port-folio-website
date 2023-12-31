import './index.scss'
import { NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome,faUser,faEnvelope,faCode,faStarAndCrescent} from '@fortawesome/free-solid-svg-icons'
import Hamburger from './Hamburger'

const Sidebar = () => {
    return <div className='nav-bar'>
        <nav>
            <NavLink exact="true" activeclassname="active" className="home-link" to="/">
                <FontAwesomeIcon icon={faHome} color="4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="skill-link" to="/skill">
                <FontAwesomeIcon icon={faCode} color="4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="Exp-link" to="/exp">
                <FontAwesomeIcon icon={faStarAndCrescent} color="4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="4d4d4e" />
            </NavLink>
            <Hamburger />
        </nav>
    </div>
}

export default Sidebar