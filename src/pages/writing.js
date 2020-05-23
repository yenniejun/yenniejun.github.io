import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const WritingPage = () => (
  <Layout title="Writing">
    <SEO title="Writing" />
    <div className="homeContainer">
      <p>I like to write across genres and styles: fiction short stories, nonfiction short stories, poetry, and opinion pieces.</p>
      <p>Some of my writing is published on <a href="https://medium.com/@yennie.jun" target="_blank">Medium</a>.</p>
      <hr/>
      <p>More coming soon!</p>
    </div>
  </Layout>
)

export default WritingPage
