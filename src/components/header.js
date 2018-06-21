import React from 'react'
import Link from 'gatsby-link'
import github_logo from '../images/github.svg'

const Header = ({ siteTitle }) => (
  <div>
    <div className="background-hero"></div>
    <div className="container">
      <div className="nav">
          <div className="brand-text">{ siteTitle }</div>
          <div className="github-logo">
              <Link target="_blank" to="https://github.com/haxzie/GitMe">
                  <img alt="github-logo" src={github_logo}/>
              </Link>
          </div>
      </div>
    </div>
  </div>
)

export default Header
