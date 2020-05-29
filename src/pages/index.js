import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SocialMediaLinks from "../components/socialmedia"
import resume from  "../data/resume.pdf"

const IndexPage = () => (
  <Layout title="Hi, I'm Yennie" icon="sunflower">
    <SEO title="Yennie Jun Website" />
    <div className="homeContainer">
      <p>I am a writer, researcher, technologist, and musician.</p>
      <p>I love pursuing projects across a wide range of interests. Currently, I am working on a texting service for COVID, conducting research with the Big Data Studies Lab at Seoul National University, and writing a novel.</p>
      <p>Previously, I was a software engineer on the Education team at Microsoft. I will be pursuing an MSc in Social Data Science at Oxford's Internet Institute in the fall.</p>
    </div>
    <SocialMediaLinks />
    <hr style={{width:`50%`, margin: `1rem auto 3rem auto`}}/>
    <p>You can download my resume <a className="normalLink" href={resume} target="_blank" rel="noreferrer">here</a>.</p>   

  </Layout>
)

export default IndexPage
