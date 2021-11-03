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

  return <Layout title="Hi, I'm Yennie" subtitle="Data Scientist | AI Researcher | Writer" icon="sunflower">
    <SEO title="Yennie Jun" />

    <div className={classnames()}>
      <hr style={{marginTop: `3rem`, marginBottom: `3rem`}}></hr>
      <div id="faded_name">Hi, I'm Yennie</div>

      <div className="body-container">
        <div>
          <p>
          I am currently working as a data scientist with the <a href="https://www.unglobalpulse.org/" target="_blank" className="normalLink" rel="noreferrer">UN Global Pulse</a>, where I am analyzing content shared on public radio across the African continent and <a href="https://www.unglobalpulse.org/2021/05/who-and-un-global-pulse-are-building-a-social-listening-radio-tool-to-aid-the-covid-19-infodemic-response/" target="_blank" className="normalLink" rel="noreferrer">developing social listening tools</a> to support monitoring the COVID-19 infodemic. I am also working with <a href="https://deeplearning.ai/" target="_blank" className="normalLink" rel="noreferrer">DeepLearning.AI</a> as a course developer and subject matter expert to create a course on AI for Social Good. Recently, I completed my Master of Science (MSc in <a href="https://www.ox.ac.uk/admissions/graduate/courses/msc-social-data-science" className="normalLink" target="_blank" rel="noreferrer">Social Data Science</a> from the Oxford Internet Institute, Unviersity of Oxford. </p>
          <p>
            I am also a part of the <a href="http://bigdatastudies.net/" className="normalLink" target="_blank" rel="noreferrer">Big Data Studies Lab</a> at Seoul National University (SNU) as well as a researcher with the <a href="https://oxai.org/labs" target="_blank" className="normalLink" rel="noreferrer">Oxford AI Labs</a>.
            Before that, I was a software engineer at Microsoft on the Education team working on <a href="https://www.microsoft.com/en-us/education" className="normalLink" target="_blank" rel="noreferrer">education technology platforms</a> to empower students and teachers. Before that, I graduated from Tufts University with a B.S. in computer science, B.A. in history, and minor in music. In my spare time, I love to write creative fiction/non-fiction, learn new instruments, and combine movements ranging from martial arts to dancing.
          </p>
        </div>
        <div>
          <div className="homeFlex-image">
            <Img fluid={data.file.childImageSharp.fluid} alt="This is a picture of my face" />
          </div>
        </div>
       
      </div>

    </div>
    <br/>
    <br/>
    <p>You can download my resume <a className="normalLink" href={resume} target="_blank" rel="noreferrer">here</a>.</p>   
  </Layout>
}



export default IndexPage
