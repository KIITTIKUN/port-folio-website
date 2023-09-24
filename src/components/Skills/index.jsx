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
                        <li className='skill'>HTML/CSS (Familiar)</li>
                        <li className='skill'>Python (Familiar)</li>
                        <li className='skill'>JavaScript (Familiar)</li>
                        <li className='skill'>TypeScript (Familiar)</li>
                        <li className='skill'>SQL (Familiar)</li>
                        <li className='skill'>Latex (experience)</li>
                    </ul>
                <li className='topic-skill'>Database</li>
                    <ul>
                        <li className='skill'>MySQL (Familiar)</li>
                        <li className='skill'>SQLite (Familiar)</li>
                        <li className='skill'>MongoDB (Familiar)</li>
                    </ul>
                <li className='topic-skill'>Web frameworks and technologies</li>
                    <ul>
                        <li className='skill'>Node.js (Familiar)</li>
                        <li className='skill'>React (Familiar)</li>
                        <li className='skill'>Express (Familiar)</li>
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