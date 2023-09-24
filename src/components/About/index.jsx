import AnimateLetters from '../AnimateLetters'
import {useState,useEffect} from 'react'
import './index.scss'
import Loader from 'react-loaders'
import Profile from './Profile'

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
            <p>I'm Kittikun Parinyaprasert, a mathematics graduate in 2022 at the Rajamangala University of Technology Thanyaburi. 
                I dream of becoming a web developer. And I consistently strive to enhance my coding skills.</p>
            <p>I'm seeking opportunities in the IT industry to leverage my skills and expertise on a variety of challenging projects.</p>
        </div>
        <Profile/>
    </div>
    <Loader type="pacman" />
    </>
    )
}

export default About