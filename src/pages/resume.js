import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import resume from  "../data/resume.pdf"

const ResumePage = () => (
  <Layout title="Resume">
    <SEO title="Resume" />
    <div className="homeContainer">
      <a className="normalLink" href={resume} target="_blank">Download PDF</a>
    </div>
  </Layout>
)

export default ResumePage
