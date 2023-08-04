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
              fluid {
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
    >
              
    <SEO title="Yennie Jun's Portfolio" />
    

    <div className="mainContainer">
      <p>My more recent writing and projects can be found on 
        <a href='https://blog.yenniejun.com/'
        className="normalLink" 
        target="_blank" 
        rel="noreferrer"> Art Fish Intelligence.</a></p>
      <hr/>
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
