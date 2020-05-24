import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import resume from  "../data/resume.pdf"

const ResumePage = () => (
  <Layout title="Resume">
    <SEO title="Resume" />
    <div className="homeContainer">
      <a className="normalLink" href={resume} target="_blank" rel="noreferrer">Download PDF</a>
    </div>
  </Layout>
)

export default ResumePage
