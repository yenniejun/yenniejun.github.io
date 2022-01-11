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
          <div className="homeFlex-image">
            <Img fluid={data.file.childImageSharp.fluid} alt="This is a picture of my face" />
          </div>
        </div>

        <div>
          <p>
          I currently work as a data scientist with the <a href="https://www.unglobalpulse.org/" target="_blank" className="normalLink" rel="noreferrer">UN Global Pulse</a>, where I am analyzing content shared on public radio across the African continent and <a href="https://www.unglobalpulse.org/2021/05/who-and-un-global-pulse-are-building-a-social-listening-radio-tool-to-aid-the-covid-19-infodemic-response/" target="_blank" className="normalLink" rel="noreferrer">developing social listening tools</a> to support COVID-19 public health monitoring. I am also developing a course on AI for Social Good with <a href="https://deeplearning.ai/" target="_blank" className="normalLink" rel="noreferrer">DeepLearning.AI</a>. Recently, I completed my Master of Science (MSc) in <a href="https://www.ox.ac.uk/admissions/graduate/courses/msc-social-data-science" className="normalLink" target="_blank" rel="noreferrer">Social Data Science</a> from the Oxford Internet Institute.</p>
          <p>
            I am also a part of the <a href="http://bigdatastudies.net/" className="normalLink" target="_blank" rel="noreferrer">Big Data Studies Lab</a> at Seoul National University (SNU) as well as a researcher with the <a href="https://oxai.org/labs" target="_blank" className="normalLink" rel="noreferrer">Oxford AI Labs</a>.
            Before that, I was a software engineer at Microsoft on the Education team working on <a href="https://www.microsoft.com/en-us/education" className="normalLink" target="_blank" rel="noreferrer">education technology platforms</a> to empower students and teachers. Before that, I graduated from Tufts University with a B.S. in computer science, B.A. in history, and minor in music. In my spare time, I love to write creative fiction/non-fiction, learn new instruments, and combine movements ranging from martial arts to dancing.
          </p>
          <p>You can download my resume <a className="normalLink" href={resume} target="_blank" rel="noreferrer">here</a>.</p>   

        </div>
       
       
      </div>


      <div>
          <h2>Where am I from?</h2>
          <p>
            I like to travel, and I get asked this question a lot. It's not an easy question for me to answer. I've lived in a lot of different places:
            <ul className="placesLived">
              <li>📍 Greater Boston Area (birth-2006, 2013-2017)</li>
              <li>📍 Louisiana (2006-2013)</li>
              <li>📍 Hong Kong (2016)</li>
              <li>📍 Seattle, WA (2017-2019)</li>
              <li>📍 Seoul, South Korea (birth, 2019-2020)</li>
              <li>📍 Oxford, UK (2020-2021)</li>
              <li>📍 ??? (present day)</li>
            </ul>

          </p>

        </div>

    </div>
   
  </Layout>
}



export default IndexPage
