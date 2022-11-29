import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import resume from  "../data/resume.pdf"
import classnames from 'classnames';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from "gatsby"


const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "me_fb.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Layout title="Hi, I'm Yennie" subtitle="AI Researcher | Data Scientist | Writer" icon="sunflower">
    <SEO title="Yennie Jun" />

    <div className={classnames()}>
      <hr style={{marginTop: `3rem`, marginBottom: `3rem`}}></hr>
      <div id="faded_name">Hi, I'm Yennie</div>

      <div className="body-container">
      
      
        <div>
          <p>I am currently a machine learning engineer at <a href="https://www.truveta.com/" target="_blank" className="normalLink" rel="noreferrer">Truveta</a>, a company dedicated to saving lives with data in the healthcare space.</p>

          <p>My professional career has focused around applications of AI/ML for good. Previously, I have worked as a data scientist with the United Nations on COVID-19 public health monitoring on radio; as a researcher with <a href="http://bigdatastudies.net/" className="normalLink" target="_blank" rel="noreferrer">Big Data Studies Lab</a> at Seoul National University on the future of big data archives; and as a software engineer with Microsoft working on <a href="https://www.microsoft.com/en-us/education" className="normalLink" target="_blank" rel="noreferrer">education technology platforms</a> to empower students and teachers. I have also worked with OpenAI and Oxford on research to reduce harms and biases in AI.</p> 

          <p>I have a Masters in Social Data Science from the University of Oxford and a Bachelors in computer science and history from Tufts University. I have lived in an assortment of places, including Boston, Louisiana, Seattle, Seoul, Oxford, and NYC.</p>

          <p>In my spare time, I like to write. You can check out my blog, where I write about creative projects using generative AI!</p>

          {/* <p>You can download my resume <a className="normalLink" href={resume} target="_blank" rel="noreferrer">here</a>.</p>    */}

        </div>

        <div>
          <div className="homeFlex-image">
            <Img fluid={data.file.childImageSharp.fluid} alt="This is a picture of my face" />
          </div>
        </div>
      </div>
      <div className="homeFlex-iframe"><iframe src="https://yenniejun.substack.com/embed" width="480" height="320" frameborder="0" scrolling="no"></iframe></div>
    </div>
  </Layout>
}



export default IndexPage
