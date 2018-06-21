import React from 'react'
import Link from 'gatsby-link'
import Code from '../components/syntax'

const IndexPage = () => (
  <div>
    <h1>Hello Developers! &nbsp;<i className="em em-wave"></i></h1>
    <h3>Let's help you submit your first Pull Request.</h3>
    <p>Once your pull request is being merged, your profile will be visible in the <Link to="/submissions/">Submissions </Link>
    section of this page. For this exercise you'll be adding a new entry to the source code of this website with your profile details. 
      Excited? let's begin!
    </p>
    
    <h3>Step 1</h3>
    <p>
      Goto the <Link to="https://github.com/haxzie/GitMe"> GitHub repository </Link> of this project and fork the project to your account. 
      Click on the fork button on the top right corner of the repository page to do it. Once done, GitHub will take you to the forked copy in your account.
      
      
    </p>
  </div>
)

export default IndexPage
