import React from "react";
import Layout from "../../components/layouts";
import "./styles.scss";
export const frontmatter = {
  title: "C.V.",
  color: "blue",
  description: "Nuno Santos Currículo."
};

const Resume = props => (
  <Layout {...props} frontmatter={frontmatter}>
    <div className="resume-wrapper content-container">
      <section className="summary-wrapper masthead row middle-xs top-sm">
        <div className="title-wrapper col-xs-12 col-md-6">
          <h1 className="page-title" id="kristoffer-hedstrom">
            Nuno Santos
          </h1>
        </div>
        <div className="contact-wrapper col-md-6 col-xs-12">
          <div className="email">
            Email:{" "}
            <a className="block-link" href="mailto:nunosantoswebdesigner@gmail.com">nunosantoswebdesigner@gmail.com</a>
          </div>
          <div className="site">
            Site:{" "}
            <a className="block-link" href="http://nuno-santos.netlify.com">
              nuno-santos.netlify.com
            </a>
          </div>
        </div>
      </section>

      <section className="section-wrapper summary-wrapper row">
        <div className="summary col-xs-12">Sou Frontend e Web Developer com <span className="highlight">3 anos de experiência profissional</span> e tenho as duas habilidades, programação e design, o que me torna um pouco estranho mas também apto para realizar diferentes tarefas. Tenho experiência como Webdesigner a desenvolver <a target="_blank" href="http://www.egorealestate.com/RealEstateWebsite?#tpl" className="my_highlight_lik" target="_">websites para Ramo Imóbiliario</a> e também como Frontend na área dos <a target="_blank" href="http://inm.pt/#produtos/bnk100-bankequipment" className="my_highlight_lik" target="_">Quiosques de Pagamentos</a>.
        <br/>
        As minhas prespectivas para o futuro são simples,  <span className="highlight"> continuar a aprender</span> e manter-me sempre na crista da onda, pois considero que o estudo e informação contínua, são os ingredientes certos para o crescimento nesta área.
        </div>
      </section>

      <section className="section-wrapper experience-wrapper row">
        <header className="section-header col-xs-12 col-sm-3">
          <h2 className="section-headline">Experiência</h2>
        </header>
        <div className="section-content col-xs-12 col-sm-9">
          <div className="experience">
            <div className="title-location row space-between-xs">
              <h3 className="title col-xs-12 col-sm-8">Front-End Developer</h3>
              <div className="location col-xs-12 col-sm-4">
                Óbidos/Lisboa, Portugal
              </div>
            </div>
            <a target="_blank" href="https://inm.pt" className="org highlight-link" rel="noopener noreferrer">
            <span className="highlight my_highlight_lik">Innovation Makers</span>
            </a>
            <div className="dates">
              <abbr className="dt dt-start" title="2019-03-04">
                Agosto 2018
              </abbr>{" "}
              -{" "}
              <abbr className="dt dt-end" title="now">
                Presente Data
              </abbr>
            </div>
            <div className="summary">
              <ul>
                <li>Integração de Layouts em JavaScript (M.V.C)</li>
                <li>Adaptações de funcionalidades em Quiosques de Pagamentos</li>
                <li>Criação de animações para APP de Quiosques de Pagamentos</li>
                <li>Noções de Full Satck, Frontend, Backend e MiddleWare e comunicação com API</li>
                <li>Montagem de equipamentos em Quiosques de Pagamentos</li>
                <li>Responsável pela supervisão de Estágios Profissionais</li>
              </ul>
              <p>
                Tecnologias: <em>JavaScript</em>, <em>BackBone</em>,{" "}
                <em>JQuery</em>, <em>Require.js</em>, <em>Git & Git Bash</em>,{" "}
                <em>Vue.js</em>, <em>React.js</em>, <em>SCSS</em>, 
                <em> SASS</em>, <em>CSS Grid</em>, <em>VS Code</em>
              </p>
            </div>
          </div>
          <br />
          <br />
         
          <div className="experience">
            <div className="title-location row space-between-xs">
              <h3 className="title col-xs-12 col-sm-8">
                Web Designer
              </h3>
              <div className="location col-xs-12 col-sm-4">Óbidos, Portugal</div>
            </div>
            <a target="_blank" href="https://www.janeladigital.com/" className="org highlight-link" rel="noopener noreferrer">
            <span className="highlight my_highlight_lik">Janela Digital</span>
            </a>
            <div className="dates">
              <abbr className="dt dt-start" title="2016-03-27">
                Setembro 2016
              </abbr>{" "}
              -{" "}
              <abbr className="dt dt-end" title="2019-02-15">
                Agosto 2018
              </abbr>
            </div>
            <div className="summary">
              <ul>
                <li>Desing e Desenvolvimento de Websites para o ramo Imobiliário</li>
                <li>Criação de Templates e integração em C.R.M. para venda em Webstore</li>
                <li>Criação de Plugins para Webstore (P.H.P.)</li>
                <li>Desenvolvimento de Templates para WebSite Builder</li>
                <li>Desenvolvimento de wesbsites personalizados com acompanhamento do cliente através de Abode X.D.</li>
              </ul>
              <p>
                Tecnologias: <em>PHP</em>, <em>XML</em>,{" "}
                <em>LESS</em>, <em>JavaScript</em>, <em>Jquery</em>,{" "}
                <em>Adobe XD</em>, <em>Adobe Photoshop</em>, <em>Adobe Illustrator</em>, 
                <em> FileZilla</em>
              </p>
            </div>
          </div>
          
         
        </div>
      </section>

      <section className="section-wrapper education-wrapper row">
        <header className="section-header col-xs-12 col-sm-3">
          <h2 className="section-headline">Educação</h2>
        </header>
        <div className="section-content col-xs-12 col-sm-9">
          <div className="education">
            <div className="title-location row space-between-xs">
              <h3 className="title col-xs-12 col-sm-8">
                <abbr className="help" title="Bachelor of Science">
                  Estagiágio Profissional
                </abbr>
                , Web Developer
              </h3>
              <div className="location col-xs-12 col-sm-4">Lisboa & Óbidos, PT <br/><span>NOTA: 15</span> </div>
            </div>
            <span className="org highlight-italic">
            <a target="_blank" href="https://www.inm.pt" className="org highlight-link" rel="noopener noreferrer">
              <span className="highlight my_highlight_lik">Innovation Makers</span>
            </a>
            </span>
            <div className="dates">
              <abbr className="dt dt-start" title="2016-05-01">
                Maio 2016
              </abbr>{" "}
              -{" "}
              <abbr className="dt dt-end" title="2016-09-01">
                Setembro 2016
              </abbr>
            </div>
            <div className="summary">
              <ul>
                <li>Indrodução à linguagem Java</li>
                <li>Indrodução ao IntelliJ IDEA</li>
                <li>Indrodução aos comandos no terminal, consola e shell</li>
                <li>Indrodução aos conceitos git e controlo de versões</li>
                <li>Desenvolvimento de Manual de Instruções para Quisques de Pagamentos</li>
                <li>Desenvolvimento de Software para gerir uma Biblioteca</li>
              </ul>
            </div>
          </div>
          <br />
          <br />
          <div className="education">
            <div className="title-location row space-between-xs">
              <h3 className="title col-xs-12 col-sm-8">
                <abbr className="help" title="Bachelor of Science">
                  Curso Profissional
                </abbr>
                , Programação Web
              </h3>
              <div className="location col-xs-12 col-sm-4">Caldas da Rainha, PT <br /><span>NOTA: 17</span></div>
            </div>
            <span className="org highlight-italic">
            <a target="_blank" href="https://cencal.pt/" className="org highlight-link" rel="noopener noreferrer">
            <span className="highlight my_highlight_lik">C.E.N.C.A.L.</span>
            </a>
            </span>
            <div className="dates">
              <abbr className="dt dt-start" title="2016-05-01">
                Setembro 2015
              </abbr>{" "}
              -{" "}
              <abbr className="dt dt-end" title="2016-09-01">
                Maio 2016
              </abbr>
            </div>
            <div className="summary">
              <ul>
                <li>Indrodução aos conceitos de Algoritmia e Programação</li>
                <li>Programação em pseudo-código em Skecth</li>
                <li>Indrodução às Tecnologias C#, ASP.net, HTML & CSS</li>
                <li>Indrodução aos conceitos de Editor de Texto e de I.D.E.</li>
                <li>Programação em linguagem SQL</li>
                <li>Programação em ASP.NET.</li>
                <li>Criação de um website para um Restaurante</li>
                <li>Criação de um Projecto Final de Curso</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrapper skills-wrapper row">
        <header className="section-header col-xs-12 col-sm-3">
          <h2 className="section-headline">Skills</h2>
        </header>
        <div className="section-content col-xs-12 col-sm-9">
          <ul className="skills no-bullet-list">
            <li className="skill">HTML5</li>
            <li className="skill">CSS3</li>
            <li className="skill">SASS/LESS</li>
            <li className="skill">JavaScript</li>
            <li className="skill">JQuery</li>
            <li className="skill">React.js</li>
            <li className="skill">Vue.js</li>
            <li className="skill">P5.js</li>
            <li className="skill">Require.js</li>
            <li className="skill">Node JS</li>
            <li className="skill">NPM</li>
            <li className="skill">Mongo bd</li>
            <li className="skill">Contentfull</li>
            <li className="skill">PHP</li>
            <li className="skill">Git</li>
            <li className="skill">GitHub Pages</li>
            <li className="skill">Netlify</li>
            <li className="skill">Visual Code</li>
            <li className="skill">Sublime Text</li>
            <li className="skill">Adobe XD</li>
            <li className="skill">Photoshop</li>
            <li className="skill">Illustrator</li>
            <li className="skill">Mac OS X</li>
            <li className="skill">Windows</li>
          </ul>
        </div>
      </section>

      <footer className="footer">
        <p>
          <em className="highlight">
            URLs e Referências disponíveis
          </em>
        </p>
      </footer>
    </div>
  </Layout>
);

export default Resume;
