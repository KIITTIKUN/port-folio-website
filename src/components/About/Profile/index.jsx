import { useRef } from 'react'
import profile from '../../../assets/images/profile-about.JPG'
import Typewriter from './Typewriter'
import './index.scss'

const Profile = () => {
  const bgRef = useRef()
  const profileRef = useRef()

  return (
    <div className="profile-container-in-about-page" ref={bgRef}>
      <img
        className="profile-about"
        ref={profileRef}
        src={profile}
        alt="about me profile"
      />
      <Typewriter/>
    </div>
  )
}

export default Profile