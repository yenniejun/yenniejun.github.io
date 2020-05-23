import React from "react"
import Layout from "../components/layout"
import PortfolioPanel from "../components/portfolio/panel"
import SEO from "../components/seo"
import portfolioData from "../data/portfolio.json"

const colors = ["#ffece5","#ffdfd3","#ffd2c2","#ffc5b0","#ffb99f","#ffac8d","#ff9f7c","#ff926a","#ff8559","#ff7f50"];

const PortfolioPage = () => (
  <Layout title="Projects">
    <SEO title="Portfolio" />
    <div style={{ marginBottom: `15rem` }}>
      {portfolioData.map((item, i) =>
            <PortfolioPanel 
              key={i} 
              color={colors[i]}
              data={item}
            />
          )
        }
    </div>
  </Layout>
)

export default PortfolioPage
