import React from "react";
import Layout from "../components/layouts";

const Index = props => (
  <Layout {...props}>
    <div className="content-container">
      <h1 className="page-title">Nuno Santos</h1>
      <div className="portfolio-items">
        {
          "Nuno Santos é um Front-end Developer a viver no momento em Caldas da Rainha"
        }
      </div>
    </div>
  </Layout>
);

export default Index;
