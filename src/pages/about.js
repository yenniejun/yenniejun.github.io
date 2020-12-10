import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import resume from  "../data/resume.pdf"

const AboutPage = () => (
  <Layout title="About">
    <SEO title="About" />
    <div className="mainContainer">
           <hr/>
      <a className="normalLink" href={resume} target="_blank" rel="noreferrer">Download Resume</a>
    </div>
  </Layout>
)

export default AboutPage
