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
    <div className="homeFlex-iframe"><iframe src="https://yenniejun.substack.com/embed" width="480" height="320" frameborder="0" scrolling="no"></iframe></div>

    <div className="mainContainer">
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
