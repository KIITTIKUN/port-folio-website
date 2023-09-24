import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faHtml5,faCss3,faReact,faJsSquare,faGitAlt} from '@fortawesome/free-brands-svg-icons'

const Cubespinner = () => {
    return(
        <div className="stage-cube-cont">
            <div className='cubespinner'>
                <div className="face1">
                    <FontAwesomeIcon icon={faGithub} color='#444444'/>
                </div>
                <div className="face2">
                    <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
                </div>
                <div className="face3">
                    <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
                </div>
                <div className="face4">
                    <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
                </div>
                <div className="face5">
                    <FontAwesomeIcon icon={faJsSquare} color='#EFD810'/>
                </div>
                <div className="face6">
                    <FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/>
                </div>
            </div>
        </div>
    )
}

export default Cubespinner