import AnimateLetters from '../AnimateLetters'
import {useState,useEffect} from 'react'
import './index.scss'
import Typewriter from './Typewriter'
import Loader from 'react-loaders'

const Skills = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const skillArray = ['S','k','i','l','l'];

    useEffect(()=>{
        setTimeout(()=>{
            setLetterClass('text-animate-hover')
        },3000)
    },[])


    return (
        <>
    <div className="container skill-page">
        <div className="text-zone">
            <h1>
                <AnimateLetters stringArray={skillArray} index={15} letterClass={letterClass}/>
            </h1>
            <ul>
                <li>Programming, scripting, and markup languages</li>
                    <ul>
                        <li>HTML/CSS</li>
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>SQL</li>
                        <li>Latex</li>
                    </ul>
                <li>Database</li>
                    <ul>
                        <li>PostgreSQL</li>
                        <li>MySQL</li>
                        <li>SQLite</li>
                        <li>MongoDB</li>
                    </ul>
                <li>Web frameworks and technologies</li>
                    <ul>
                        <li>Node.js</li>
                        <li>React</li>
                        <li>Express</li>
                    </ul>
            </ul>
        </div>
        <div className='skill-zone'>
            <Typewriter />
        </div>
    </div>
    <Loader type="pacman" />
    </>
    )
}

export default Skills