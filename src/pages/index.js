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

      <div>
        <p>I currently work as a Research Engineer at Google DeepMind. I also write about independent AI research experiments on my blog at <a href="https://www.artfish.ai/" className="normalLink" target="_blank" rel="noreferrer"> Art Fish Intelligence</a>.</p>

        <p>I have worked across a variety of roles and disciplines:</p>
        <ul className="careerList">
          <li> Machine learning in health care applications (with <a href="https://www.truveta.com/" target="_blank" className="normalLink" rel="noreferrer">Truveta</a>)</li>
          <li> Research into harms and biases in generative AI models (with Oxford and OpenAI)</li>
          <li> Data science in humanitarian aid and public health (with the <a href="https://www.unglobalpulse.org/" target="_blank" className="normalLink" rel="noreferrer">United Nations</a>)</li>
          <li> Digital humanities and computational history (with the <a href="http://bigdatastudies.net/" className="normalLink" target="_blank" rel="noreferrer">Big Data Studies Lab</a>)</li>
          <li> Education technology software (with <a href="https://www.microsoft.com/en-us/education" className="normalLink" target="_blank" rel="noreferrer">Microsoft</a>)</li>
        </ul>

        <p>I have a Masters in <a href="https://www.oii.ox.ac.uk/study/msc-in-social-data-science/" target="_blank" className="normalLink" rel="noreferrer">Social Data Science</a> from the University of Oxford and a Bachelors in Computer Science and History from Tufts University.</p>


      </div> 

    </div>
  </Layout>
}



export default IndexPage
