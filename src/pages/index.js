import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import resume from  "../data/resume.pdf"
import profilepic from "./../images/me_hat.jpg"
import classnames from 'classnames';

const IndexPage = () => (
  <Layout title="Hi, I'm Yennie" icon="sunflower">
    <SEO title="Yennie Jun Website" />
    <div className={classnames("homeContainer", "mainContainer")}>
      <br/>
      <div className="homeFlex">
        <div className="left">
          <p>I am currently studying for my Master of Science (MSc) in Social Data Science at the Oxford Internet Internet Institute. I am also part of the Big Data Studies Lab at Seoul National University (SNU), where I investigate the future of digital archives in the age of Big Data.</p>
          <p>Before that, I was a software engineer at Microsoft on the Education team.</p>
          <p>Before that, I graduated from Tufts University with a B.S. in computer science, B.A. in history, and minor in music.</p>
          <p>For fun, I love to cycle around the English countryside, hike, do martial arts (Taekwondo), read, and write (anything from short stories to fiction to poetry; check out my Writing!). I also love to play music: piano, flute, accordion, and now trying to learn classical guitar.</p>
          {/* <p>📚 I love reading, everything including non-fiction, fiction, poetry, biography, memoir, history, and science</p> */}
        </div>
        <div className="right">
          <img src={profilepic} alt="Picture of Yennie" />
        </div>
      </div>
       

    </div>
    <br/>
    <br/>
    <p>You can download my resume <a className="normalLink" href={resume} target="_blank" rel="noreferrer">here</a>.</p>   

  </Layout>
)

export default IndexPage
