import Loader from 'react-loaders'
import './index.scss'
import Timeline from './Timeline'
import AnimateLetters from '../AnimateLetters'
import {useState, useEffect} from 'react'

const Experience = () =>{
    const [letterClass, setLetterClass] = useState('text-animate')
    const expArray = ['E','x','p','e','r','i','e','n','c','e'];

    useEffect(()=>{
        setTimeout(()=>{
            setLetterClass('text-animate-hover')
        },3000)
    },[])

    return(
        <>
        <div className='container exp-page'>
            <div className='text-zone'>
            <h1>
                <AnimateLetters stringArray={expArray} index={15} letterClass={letterClass}/>
            </h1>
            </div>
            <div className='timeline-zone'>
                <Timeline />
            </div>
        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default Experience