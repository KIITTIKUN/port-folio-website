import AnimateLetters from '../AnimateLetters'
import {useState,useEffect} from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGit, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
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
            <p>I am Kittikun Parinyaprasert, a mathematics graduate in 2022 with the dream of becoming a web developer. I consistently strive to enhance my coding skills.</p>
            <p>I am seeking opportunities in the IT industry to leverage my skills and expertise on a variety of challenging projects.</p>
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