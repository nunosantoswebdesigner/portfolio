import React from "react";
import ImageLoader from "../../components/image-loader";
import Layout from "../../components/layouts";
import shuffle from "../../utils/shuffle-array";
import "./styles.scss";

export const frontmatter = {
  title: "About",
  color: "green",
  description: "Olá! Eu sou o Nuno Santos, tenho 35 anos e moro em Caldas da Rainha, na zona Oeste de Portugal. Estudei na área de Artese gostava de disciplinas onde havia espaço para a criatividade. Viver na Holandadurante 5 anos, motivou o meu interessepor artes, visitei todos os museus e exposições que consegui. Sempre gostei de tecnologia e computadoresdesde novo e explorava os programas de desenho desde os seus primórdios. Mas em 2016 a minha vida mudou quando estava a ver um anúncio no Youtube, sobre um website que possibilitava fazer outros websites simplesmente arrastando os elementos, e editando o texto que já lá existia. Começou assim então a minha jornada, por sorte, nesse ano entrei num curso de Programação Web. Depois de finalizar o curso consegui entrar num estágio profissional na impressa Innovation Makers no Parque Tecnológicode Óbidos. Pouco tempo depois de ver o anúncio percebi que para fazer um site não era apenas necessário arrastar só os elementos. Passei dois anos a trabalhar como webdesinger na Janela Digital, desenvolvendo sites para o ramo imobiliário. Em 2018 voltei para a Innovation Makers e trabalho com projectos na área dos Quiosques de Pagamentos.",
  images: [
    {
      small: "/images/about/shakey-0-small.jpg",
      big: "/images/about/shakey-0.gif"
    },
    {
      small: "/images/about/shakey-1-small.jpg",
      big: "/images/about/shakey-1.gif"
    },
    {
      small: "/images/about/shakey-2-small.jpg",
      big: "/images/about/shakey-2.gif"
    },
    {
      small: "/images/about/shakey-3-small.jpg",
      big: "/images/about/shakey-3.gif"
    },
    {
      small: "/images/about/shakey-4-small.jpg",
      big: "/images/about/shakey-4.gif"
    },
    {
      small: "/images/about/shakey-5-small.jpg",
      big: "/images/about/shakey-5.gif"
    },
    {
      small: "/images/about/shakey-6-small.jpg",
      big: "/images/about/shakey-6.gif"
    },
    {
      small: "/images/about/shakey-7-small.jpg",
      big: "/images/about/shakey-7.gif"
    }
  ]
};
const About = props => {
  const { images } = frontmatter;
  return (
    <Layout {...props} frontmatter={frontmatter}>
      <div className="about-photos">
        {shuffle(images)
          .slice(0, 3)
          .map((image, i) => (
            <ImageLoader
              key={i}
              className="about-photo"
              placeholder={image.small}
              aspectRatio={1}
              img={image.big}
              imageProps={{
                alt: "GIF of Kris"
              }}
            />
          ))}
      </div>
      <div className="content-container">
        <h1 className="page-title load-in">Sobre Mim</h1>
        <div className="row between-xs">
          <div className="module col-xs-12 col-sm-8">
            <h2 className="sub-title load-in">Bio</h2>
            <div>
            <span className="highlight "></span>
              <p className="load-in">
              Olá! Eu sou o Nuno Santos, tenho 35 anos e moro em Caldas da Rainha, na zona Oeste de Portugal. 
              <span className="highlight "> Estudei na área de Artes</span> e gostava de disciplinas onde havia espaço para a criatividade. Viver na Holanda durante 5 anos permitiu-me visitar alguns museus e exposições, o que manteve o meu interesse pela área. 
              </p>
              <p className="load-in">
              <span className="highlight ">Sempre gostei de tecnologia e computadores</span> desde novo e explorava os programas de desenho desde os seus primórdios.
                Mas em 2016 a minha vida mudou quando estava a ver um anúncio no Youtube, sobre um website que possibilitava fazer outros websites simplesmente arrastando os elementos, e editando o texto que já lá existia. 
              </p>
              <p className="load-in"> 
              <span className="highlight ">Então começou assim a minha jornada nesta área</span>, e por sorte, nesse ano entrei num curso de Programação Web. Depois de finalizar o curso consegui entrar num estágio profissional na impressa Innovation Makers no Parque Tecnológico de Óbidos. Pouco tempo depois de ver o anúncio percebi que para fazer um site não era apenas necessário arrastar só os elementos. Passei dois anos a trabalhar como webdesinger na Janela Digital, <span className="highlight ">desenvolvendo sites</span> para o ramo imobiliário. Em 2018 voltei para a Innovation Makers e trabalho com projectos na área dos Quiosques de Pagamentos.
               <a className="highlight" href="mailto:hello@nunosantoswebdesigner@gmail.com?subject=Olá"></a>
              </p>
            </div>
          </div>
          <div className="module col-xs-12 col-sm-3">
            <h2 className="sub-title load-in">{"Ver Mais"}</h2>
            <ul className="no-bullet-list social-links">
              <li className="load-in"><a href="https://github.com/nunosantoswebdesigner" rel="noopener noreferrer" target="_blank">Github</a></li>
              <li className="load-in"><a href="https://www.instagram.com/nunosantos_webdesigner/" rel="noopener noreferrer" target="_blank">Instagram</a></li>
              <li className="load-in"><a href="https://www.linkedin.com/in/nuno-santos-96b300125/" rel="noopener noreferrer" target="_blank">Linkedin</a></li>
              <li className="load-in"><a href="https://www.facebook.com/nunosantoswebdesigner" rel="noopener noreferrer" target="_blank">Facebook</a></li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
