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
      file(relativePath: { eq: "me_b&w.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Layout title="Hi, I'm Yennie" icon="sunflower">
    <SEO title="Yennie Jun" />
    <div className={classnames("homeContainer", "mainContainer")}>
      <br/>
      <div className="home-blurb">I am a multi-disciplinary data scientist, AI researcher, and writer. On the technology side, I enjoy using data to ask important and difficult questions about human society. On the creative side, I love to write creative fiction, learn new instruments, and combine movements ranging from martial arts to dancing.</div>
      <div className="homeFlex">
        <div className="homeFlex-image">
          <Img fluid={data.file.childImageSharp.fluid} alt="This is a picture of my face"/>
        </div>
        <div className="homeFlex-bio">
          <p>I am currently studying for my Master of Science (MSc) in <a href="https://www.ox.ac.uk/admissions/graduate/courses/msc-social-data-science" className="normalLink" target="_blank" rel="noreferrer">Social Data Science</a> at the Oxford Internet Internet Institute. I am also an AI and Data Science Research Fellow with the <a href="https://www.unglobalpulse.org/" target="_blank" className="normalLink" rel="noreferrer">UN Global Pulse</a>, where I am analyzing content shared on public radio across the African continent and <a href="https://www.unglobalpulse.org/2021/05/who-and-un-global-pulse-are-building-a-social-listening-radio-tool-to-aid-the-covid-19-infodemic-response/" target="_blank" className="normalLink" rel="noreferrer">developing social listening tools</a> to support monitoring the COVID-19 infodemic. </p>
            
          <p>I am a part of the <a href="http://bigdatastudies.net/" className="normalLink" target="_blank" rel="noreferrer">Big Data Studies Lab</a> at Seoul National University (SNU) as well as a student researcher with the <a href="https://oxai.org/labs" target="_blank" className="normalLink" rel="noreferrer">Oxford AI Labs</a>.</p>

          <p>Before that, I was a software engineer at Microsoft on the Education team working on <a href="https://www.microsoft.com/en-us/education" className="normalLink" target="_blank" rel="noreferrer">education technology platforms</a> to empower students and teachers. Before that, I graduated from Tufts University with a B.S. in computer science, B.A. in history, and minor in music.</p>
          
          {/* <p>For fun, I love to cycle around the English countryside, hike, do martial arts (Taekwondo), read, and write (anything from short stories to fiction to poetry; check out my Writing!). I also love to play music: piano, flute, accordion, and now trying to learn classical guitar.</p> */}
          {/* <p>📚 I love reading, everything including non-fiction, fiction, poetry, biography, memoir, history, and science</p> */}
        </div>
      </div>
    </div>
    <br/>
    <br/>
    <p>You can download my resume <a className="normalLink" href={resume} target="_blank" rel="noreferrer">here</a>.</p>   
  </Layout>
}



export default IndexPage
