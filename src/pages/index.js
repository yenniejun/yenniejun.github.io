import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import resume from  "../data/resume.pdf"

const IndexPage = () => (
  <Layout title="Hi, I'm Yennie" icon="sunflower">
    <SEO title="Yennie Jun Website" />
    <div className="homeContainer">
      <p>Welcome to my site!</p>
      <p>I like to wear a lot of different hats 🎩.</p>

      <div style={{textAlign:'left'}}>
        <p><b>Technologist</b>: I was previously a software engineer at 
            Microsoft. In the fall, I will be pursuing an MSc in Social Data Science 
            at Oxford's Internet Institute.</p>

        <p><b>Researcher</b>: I am working with the Big Data 
            Studies Lab at Seoul National University about the future of archives
            during the age of big data.</p>

        <p><b>Writer</b>: I am finishing a novel. Reach out to me if
            you want to learn more!</p>

        <p><b>Musician</b>: I play piano, flute, accordion, and whatever else I can 
            get my hands on (including beer bottles).</p>

        <p><b>Lifelong learner</b>: I always love learning new things! I read fiction,
            non-fiction, poetry, biography, memoir, history books, science books ... and sometimes
            I write about what I learned.</p>
      </div>
      

    </div>
    <br/>
    <br/>
    <p>You can download my resume <a className="normalLink" href={resume} target="_blank" rel="noreferrer">here</a>.</p>   

  </Layout>
)

export default IndexPage
