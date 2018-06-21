import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import Header from '../components/header'
import Footer from '../components/footer'

import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Make your first GitHub Pull Request' },
        { name: 'keywords', content: 'GitHub, PullRequest, First OpenSource, contribution' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1'},
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    
    <div className="container">
      <div className="card">
          <div className="tab-holder">
              <ul className="tabs">
                  <li><Link to="/" exact={true} activeClassName="active">Instructions</Link></li>
                  <li><Link to="/submissions/" activeClassName="active">Submissions</Link></li>
              </ul>
          </div>
          <div className="content">
            {children()}
          </div>
      </div>
    </div>
    <Footer author={data.site.siteMetadata.author} profile={data.site.siteMetadata.author} />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        author
        profile
      }
    }
  }
`
