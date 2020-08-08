import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import resume from  "../data/resume.pdf"
import profilepic from "./../images/me_hat.jpg"


const IndexPage = () => (
  <Layout title="Hi, I'm Yennie" icon="sunflower">
    <SEO title="Yennie Jun Website" />
    <div className="homeContainer">
      <p>Welcome to my site!</p>
      <p>I am a researcher with the Big Data Studies Lab at Seoul National University. I will be attending Oxford University in the fall to pursue an MSc in Social Data Science.</p>
      <br/>

      <div className="homeFlex">
        <div className="left">
          <img src={profilepic} alt="Picture of me" />
        </div>
        <br/>
        <div className="right">
          <p>🎓 I graduated from Tufts University in 2017 with a B.S. in computer science and history</p>
          <p>💾 I worked as a software engineer at Microsoft for two years</p>
          <p>🌏 I quit my job at Microsoft to travel and write a novel</p>
          <p>✍️ I am researching the future of archives during the age of big data (with SNU) </p>
          {/* <p>📚 I love reading, everything including non-fiction, fiction, poetry, biography, memoir, history, and science</p> */}
          <p>🎶 I play piano, flute, accordion, and whatever else I can 
          get my hands on</p>
          <p>🥋 I am a black belt in Taekwondo</p>
          <p>🍉 I love watermelon</p>
        </div>
      </div>
       

    </div>
    <br/>
    <br/>
    <p>You can download my resume <a className="normalLink" href={resume} target="_blank" rel="noreferrer">here</a>.</p>   

  </Layout>
)

export default IndexPage
