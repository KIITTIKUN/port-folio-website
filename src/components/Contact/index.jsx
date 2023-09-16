import Loader from 'react-loaders'
import AnimateLetters from '../AnimateLetters'
import { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import './index.scss'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';

const Contact = () => {
    const form = useRef()
    const [letterClass, setLetterClass] = useState('text-animate')
    const headerArray = ['C','o','n','t','a','c','t',' ','m','e'];
    useEffect(()=>{
        setInterval(()=>{
            setLetterClass('text-animate-hover')
        },3000)
    },[])

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm('service_iagd9im', 'template_4libe3z', form.current, '2ykGMFdtNHjyl2x6a')
          .then(
            () => {
                alert('Message successfully sent!')
              window.location.reload(false)
            }).catch((error)=>{
                console.error('Email could not be sent:', error)
            })
      }
    
    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimateLetters stringArray={headerArray} index={15} letterClass={letterClass}/>
                </h1>
                <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
            <div className="info-map">
                <center>&lt;Address.&gt;</center>
                38 M.11. 
                <br />
                Pikulook.
                <br />
                Banna.
                <br />
                Nakornnayok, 26110. <br />
                <br />
                <FontAwesomeIcon icon={faPhone} color="4d4d4e" /> : 098-4528975<br />
                <FontAwesomeIcon icon={faEnvelope} color="4d4d4e" />: <span>kittikun.real@gmail.com</span><br />
            </div>
            <div className='map-wrap'>
                <MapContainer center={[14.233021282733084, 101.00428455209402]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[14.233021282733084, 101.00428455209402]}>
                        <Popup>sloba lives here, come over</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Contact