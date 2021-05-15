import React from "react"
import Layout from "../components/layout"
import PortfolioPanel from "../components/portfolio/panel"
import SEO from "../components/seo"
import portfolioData from "../data/portfolio.json"
import { useStaticQuery, graphql } from "gatsby"

const PortfolioPage = () => {
  const query = useStaticQuery(graphql`
    query {
      images: allFile(filter: {
        relativeDirectory: {eq: "projects"}
      }) {
        edges {
          node { 
            base
            id
            childImageSharp {
              fluid(maxWidth: 500, maxHeight: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  return <Layout 
    title="Projects" 
    icon="computer"
    quote="Learning is movement from moment to moment"
    quote_author="Jiddu Krishnamurti"
    >
              
    <SEO title="Portfolio" />
    <div className="mainContainer">
      <p>I'm always trying to learn new things!
      Here are some of my current or recent projects.</p>
      <hr />
        {
          portfolioData.map((item, i) =>
              <PortfolioPanel 
                key={i} 
                color = {"#f9f9f9"}
                data={item}
                image={query.images.edges.find(n => n.node.base === item.image)}
              />
            )
          }
    </div>
  </Layout>
}

export default PortfolioPage
