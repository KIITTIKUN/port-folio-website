import {useEffect, useState} from 'react'
import LogoTitle from '../../assets/images/k-alphbet.png'
import {Link} from 'react-router-dom'
import AnimateLetters from '../AnimateLetters'
import Profile  from './Profile'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons'
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
                <div className='button-link'>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kittikun-parinyaprasert-575533249/">
                    <FontAwesomeIcon className ='linkedin-icon' icon={faLinkedin} color="4d4d4e" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://github.com/KIITTIKUN">
                    <FontAwesomeIcon className='github-icon'icon={faGithub} color="4d4d4e" />
                </a>
                </div>
                <Link to='/contact' className="flat-button">CONTACT ME</Link>
            </div>
            <Profile />
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Home