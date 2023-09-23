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
                <li className='topic-skill'>Programming, scripting, and markup languages</li>
                    <ul>
                        <li className='skill'>HTML/CSS (fair)</li>
                        <li className='skill'>Python (fair)</li>
                        <li className='skill'>JavaScript (fair)</li>
                        <li className='skill'>TypeScript (fair)</li>
                        <li className='skill'>SQL (fair)</li>
                        <li className='skill'>Latex (experience)</li>
                    </ul>
                <li className='topic-skill'>Database</li>
                    <ul>
                        <li className='skill'>MySQL (fair)</li>
                        <li className='skill'>SQLite (fair)</li>
                        <li className='skill'>MongoDB (fair)</li>
                    </ul>
                <li className='topic-skill'>Web frameworks and technologies</li>
                    <ul>
                        <li className='skill'>Node.js (fair)</li>
                        <li className='skill'>React (fair)</li>
                        <li className='skill'>Express (fair)</li>
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