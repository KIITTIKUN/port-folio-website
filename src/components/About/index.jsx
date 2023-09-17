import AnimateLetters from '../AnimateLetters'
import {useState,useEffect} from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGit, faHtml5, faJsSquare, faReact,faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const headerArray = ['A','b','o','u','t',' ','m','e'];

    useEffect(()=>{
        setTimeout(()=>{
            setLetterClass('text-animate-hover')
        },3000)
    },[])


    return (
        <>
    <div className="container about-page">
        <div className="text-zone">
            <h1>
                <AnimateLetters stringArray={headerArray} index={15} letterClass={letterClass}/>
            </h1>
            <p>  I'm a very ambitious web developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.</p>
            <p>
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
            </p>
            <p>If you want to see more. This is my profile in LinkedIn:
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kittikun-parinyaprasert-575533249/">
                    <FontAwesomeIcon className ='linkedin-icon' icon={faLinkedin} color="4d4d4e" />
                </a>
                and, my projects on Github:
                <a target="_blank" rel="noreferrer" href="https://github.com/KIITTIKUN">
                    <FontAwesomeIcon className='github-icon'icon={faGithub} color="4d4d4e" />
                </a>
            </p>
        </div>
        <div className="stage-cube-cont">
            <div className='cubespinner'>
                <div className="face1">
                    <FontAwesomeIcon icon={faAngular} color='#DD0031'/>
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
                    <FontAwesomeIcon icon={faGit} color='#EC4D28'/>
                </div>
            </div>
        </div>
    </div>
    <Loader type="pacman" />
    </>
    )
}

export default About