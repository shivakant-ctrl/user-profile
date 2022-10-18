import React from "react"
import fbIcon from "../assets/facebook-icon.png"
import githubIcon from "../assets/github-icon.png"
import igIcon from "../assets/instagram-icon.png"
import twitterIcon from "../assets/twitter-icon.png"

function Footer() {
  return (
    <div className="footer">
      <img src={fbIcon} />
      <img src={githubIcon} />
      <img src={igIcon} />
      <img src={twitterIcon} />
    </div>
  )
}

export default Footer