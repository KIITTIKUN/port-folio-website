import Loader from 'react-loaders'
import AnimateLetters from '../AnimateLetters'
import { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import './index.scss'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import Swal from 'sweetalert2'

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
    
              Swal.fire({
                title: 'Send Email',
                text: "Are you confirm?",
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirm',
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire(
                    'Thank you',
                    'Your operation was successful.',
                    'success',
                  ).then(()=>{emailjs
                    .sendForm('service_iagd9im', 'template_4libe3z', form.current, '2ykGMFdtNHjyl2x6a').then(()=>{
                    window.location.reload(false)})
                  })
                }
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
            I'm interested in job opportunities. If you have any other requests or
            questions, don't hesitate to contact me using below form.</p>
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
            <div className='map-wrap'>
                <MapContainer center={[14.233021282733084, 101.00428455209402]} zoom={12}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[14.233021282733084, 101.00428455209402]}>
                        <Popup>my home lives here, come over</Popup>
                    </Marker>
                </MapContainer>
              <div className="info-map">
                <p>Kittikun Parinyaprasert.<br/> 138 M.11, Suwannasorn Road., T. Pikulook. A. Banna. 26110 Nakornnayok, Thailand </p>
                <div className='contact-box'>
            <FontAwesomeIcon icon={faPhone} color="4d4d4e" />: 098-4528975<br /> 
            <FontAwesomeIcon icon={faEnvelope} color="4d4d4e" />: <span>kittikun.real@gmail.com</span><br />
            </div>
              </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Contact