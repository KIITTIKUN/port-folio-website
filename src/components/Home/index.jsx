import {useEffect, useState} from 'react'
import LogoTitle from '../../assets/images/logo-s.png'
import {Link} from 'react-router-dom'
import AnimateLetters from '../AnimateLetters'
import Logo  from './Logo'
import Loader from 'react-loaders'
import './index.scss'

const Home = () =>{
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['i','t','t','i','k','u','n'];
    const jobArray = ['W','e','b',' ','D','e','v','e','l','o','p','e','r','.'];

    useEffect(()=>{
        setTimeout(()=>{
            setLetterClass('text-animate-hover')
        },4000)
    },[])

    return (
        <>
        <div className="container home-page">
            <div className='text-zone'>
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span> 
                <br/> 
                <span className={`${letterClass} _13`}>I</span> 
                <span className={`${letterClass} _14`}>'m</span> 
                <img src={LogoTitle} alt="developer" />
                <AnimateLetters letterClass={letterClass} stringArray={nameArray} index={15}/>
                 <br /> 
                 <AnimateLetters letterClass={letterClass} stringArray={jobArray} index={22}/>
                </h1>
                <h2>Front End Developer / JavaScript Junior / Youtuber</h2>
                <Link to='/contact' className="flat-button">CONTACT ME</Link>
            </div>
                <Logo />
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Home