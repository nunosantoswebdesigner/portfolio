import React from "react";
import Layout from "../../components/layouts";

export const frontmatter = {
  title: "Oops. Not Found.",
  color: "orange",
  nav: "none"
};

const FourOhFour = props => (
  <Layout {...props} frontmatter={frontmatter}>
    <div className="content-container">
      <h1 className="page-title">{"Not Found"}</h1>
      <p>{"Oops, can’t find that page."}</p>
      <p>Fiz algumas alterações ultimamente e provavelmente movi esta página.
      Pode voltar a <a href="/">{"Index"}</a> ou então dar uma vista de olhos em:{" "}
        <a href="">{"old site"}</a>.
      </p>
    </div>
  </Layout>
);

export default FourOhFour;
