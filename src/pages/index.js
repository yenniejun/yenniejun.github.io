import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SocialMediaLinks from "../components/socialmedia"
import TextLoop from "react-text-loop";

const attributesList = [
  "write stories",
  "travel the world",
  "make things",
  "create software",
  "read",
  "climb mountains"
]

const IndexPage = () => (
  <Layout title="Hi, I'm Yennie">
    <SEO title="Yennie Jun Website" />
    <div className="homeContainer">
      <h2 className="textloopwords" style={{ fontFamily: 'IBM Plex Sans', textAlign: 'center'}}>I like to&nbsp;
        <TextLoop children={attributesList} />
      </h2>
      <p>I love pursuing projects across a wide range of interests. Previously a software engineer on the Education team at Microsoft, I am a writer, researcher, technologist, musician, and world-adventurer.</p>
      <p>Currently, I am pursuing several technical projects (including research with the Big Data Studies Lab at Seoul National University) as well as writing a novel.</p>
      <p>I will be pursuing an MSc in Social Data Science at Oxford's Internet Institute in the fall.</p>
      
      <p></p>    
    </div>
    <SocialMediaLinks />
  </Layout>
)

export default IndexPage
