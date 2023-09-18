import { useRef } from 'react'
import profile from '../../../assets/images/my-profile.jpeg'
import './index.scss'

const Profile = () => {
  const bgRef = useRef()
  const profileRef = useRef()

  return (
    <div className="profile-container" ref={bgRef}>
      <img
        className="profile"
        ref={profileRef}
        src={profile}
        alt="JavaScript,  Developer"
      />
    </div>
  )
}

export default Profile