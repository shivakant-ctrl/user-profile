import React from "react"
import profilePicture from "../images/profile-picture.jpg"
import emailIcon from "../assets/email-icon.svg"
import linkedInIcon from "../assets/linkedin-icon.svg"

function Info() {
  return (
    <div className="info">
      <img className="profile-picture" src={profilePicture} />
      <h1 className="user-name">Ajmal Sheikh</h1>
      <p class="user-job">Frontend Developer</p>
      <p class="user-website">ajmalsheikh.website</p>
      <div className="buttons">
        <button className="email"><img src={emailIcon} />Email</button>
        <button className="linkedin"><img src={linkedInIcon} />LinkedIn</button>
      </div>
    </div>
  )
}

export default Info