import React from "react";
import Layout from "../../../components/layouts";
import ImageLoader from "../../../components/image-loader";
import DeviceFrame from "../../../components/device-frame";

export const frontmatter = {
  portfolio: true,
  order: 4,
  title: "Bio",
  color: "green",
  description: "Biografia Nuno Santos",
  path: "/portfolio/bio",
  media: [
    {
      type: "image",
      img: "/images/ncsoft/ncsoft-poster.png",
      placeholder: "/images/ncsoft/ncsoft-poster-small.png",
      aspectRatio: 0.75
    }
  ],
  styles: {
    background: "#f5f6f7"
  }
};

const NCsoft = props => {
  const { title, styles, media } = frontmatter;

  return (
    <Layout {...props} frontmatter={frontmatter}>
      <div className="portfolio">
        <section className="portfolio-media">
          <div className="portfolio-media-item portfolio-media-item" style={styles}>
            <ImageLoader
              {...media[0]}
              styles={{ maxWidth: 800, margin: "auto" }}
              imageProps={{ alt: title }}
            />
          </div>
        </section>
        <section className="content-container">
          <h1 className="page-title load-in">{title}</h1>
          <div className="row center">
            <div className="col-xs-12 col-sm-8">
              <p className="load-in"> Esta é a minha Biografia da área de TI. A minha ideia neste projecto foi usar o novo conceito "Variáveis de Css" e também explorar a optimização e performance dos webdsites modernos.<br/> <a target="_blank" href="https://developer.mozilla.org/pt-BR/docs/Web/CSS/Using_CSS_custom_properties" className="highlight my_highlight_lik" target="_"><em>Variáveis CSS </em></a>  são entidades definidas, contendo valores específicos para serem reutilizados ao longo do documento. São configuradas da seguinte forma:<br/> <em> "--cor-principal: black" e são acessadas usando a funcão "var()", ex: color: var(--cor-principal)</em>. </p>
              <p className="load-in"> Websites complexos tem uma grande quantidade de CSS, com uma grande quantidade de repetição de valores. <em>Variáveis CSS</em> permitem que um valor seja guardado num determinado lugar, e então ser referenciado em muitos outros lugares quando necessário. Um benefício adicional é a semântica dos identificadores, <em>"--cor-principal-texto"</em> é mais fácil de ser identificado do que <em>"#00ff00"</em>.</p>
              <p className="load-in"> A optimazação e performance dos Websites também foi um ponto que eu quis explorar de forma a que este website tivesse uma boa classificação nos sites de "PageSpeed" como o exemplo do "GT Metrix". <a target="_blank" href="https://gtmetrix.com/" className="highlight my_highlight_lik" target="_"><em> O GTmetrix</em></a> é uma ferramenta gratuita que analisa o desempenho de velocidade dos sites e ajuda a melhorar com sujestões de correcção.</p>
            </div>
          </div>
        </section>

        <section className="portfolio-media">
          <div
            className="portfolio-media-item"
            style={{ background: "#f5f6f7" }}
          >
            <DeviceFrame bodyStyles={{ maxHeight: 800 }}>
              <ImageLoader
                img="/images/ncsoft/gw2-home-2.0.jpg"
                placeholder="/images/ncsoft/gw2-home-2.0-small.jpg"
                aspectRatio={1700 / 1400}
                imageProps={{
                  alt: "Guild Wars 2 screen."
                }}
              />
            </DeviceFrame>
          </div>
        </section>

        <section className="content-container">
          <div className="row">
            <section className="col-xs-12 col-sm-8 col-sm-offset-2 portfolio-copy--second-row">
              <h2 className="sub-title load-in">Optimização & Performance</h2>
                <p className="load-in"> Com o passar do tempo, comecei a desenvolver sites e aplicações maiores e mais complexas! Significa que cada vez necessitamos de mais recursos e importamos mais bibliotecas externas, com intuito de produzir a melhor aplicação possível e consequentemente deixamos nosso produto final mais pesado. Isso pode-se transformar em um grave problema de performance. Afinal, quem nunca desistiu de entrar em um site que demorava muito para carregar?</p>
                <p className="load-in"> Antes de optimizar um site temos de encontrar o causador dessa demora.<br/> No devtools dos Browsers, na aba <em>network</em>, conseguimos visualizar <em className="highlight"> o que está a ser carregado e quanto tempo demora até que seja concluído</em>. Todos os ficheiros (CSS, JS, HTML) são necessários quando alguém entra no site, então o tamanho que eles pesam, impacta diretamente na usabilidade, ou seja, quanto menor o tamanho dos arquivos, consequentemente mais rápido será o carregamento da página!<br/>Estas são só algumas dicas que quando usadas, melhoram o desempenho dos sites.</p>
                <p className="load-in"> 
                  <h3>Dicas de Optimização</h3>
                    <ul>
                      <li>Minificar o CSS, Javascript e HTML
                        <p> Usar ficheiros minificados ou com terminologia em “.min”, esse “.min” significa que aquele ficheiro é a versão minificada! Minificar é remover os espaços desnecessários, tabulações, comentários, etc, tornando o ficheiro menor comparado com o “original”. Existem diversas ferramentas para minificar ficheiros, o Gulp, o Grunt ou até mesmo minificar através de sites online, como por exemplo o <a target="_blank" href="https://cssminifier.com/" className="highlight my_highlight_lik" target="_"><em>Cssminifier.com</em></a></p>
                      </li>
                      <li>Diminuir a quantidade de <em>Requests HTTP</em>
                        <p> <em>Requests</em> são todos os pedidos que o site faz para ir buscar os ficheiros dependentes, como por exemplo: imagens, css, js. Quanto mais <em>Requests</em> o site tiver, mais ele demorará a carregar! </p>
                      </li>
                      <li>Usar compressão no servidor
                        <p> Compressão no server-side é como pegar numa série de ficheiros e fizer um zip deles, para posteriormente quando este for pedido, vai descompactar e visualizar esses ficheiros normalmente mas de uma forma muito mais leve.</p>
                      </li>
                      <li>Usar o <em>Cache</em>
                        <p> Quando o cache está habilitado, o sistema verifica se o utilizador que acedeu ao site possui uma cópia dos ficheiros da página, caso exista, a cópia desses ficheiros será entregue e o utilizador conseguirá visualizar a página mais rapidamente, pois leva menos tempo para o servidor retornar as informações que estão a ser solicitadas!</p>
                      </li>
                      <li>Usar o <em>lazyload</em>
                        <p> <em>Lazyload</em> é uma técnica de carregar as primeiras informações de renderização da página. Está técnica consiste em priorizar as informações que o utilizador pede ao carregar o site e depois o restante das informações à medida que o utilizador for descendo na página. Com isso, o site carrega mais rápido e só irá carregar o restante do conteúdo caso este seja necessário.</p>
                      </li>
                </ul>
              </p>
            </section>
          </div>
        </section>

        <section className="portfolio-media">
          <div className="row">
            <div
              className="col-xs-12 col-sm-6 portfolio-media-item"
              style={{ background: "#f5f6f7" }}
            >
              <DeviceFrame>
                <ImageLoader
                  img="/images/ncsoft/gw2.jpg"
                  placeholder="/images/ncsoft/gw2-small.jpg"
                  aspectRatio={1000 / 1400}
                  imageProps={{
                    alt: "Guild Wars 2 screen."
                  }}
                />
              </DeviceFrame>
            </div>
            <div
              className="col-xs-12 col-sm-6 portfolio-media-item"
              style={{ background: "#f5f6f7" }}
            >
              <DeviceFrame>
                <ImageLoader
                  img="/images/ncsoft/gw2-races.jpg"
                  placeholder="/images/ncsoft/gw2-races-small.jpg"
                  aspectRatio={1000 / 1400}
                  imageProps={{
                    alt: "Guild Wars 2 screen."
                  }}
                />
              </DeviceFrame>
            </div>
          </div>
        </section>

        <section className="portfolio-media">
          <div
            className="portfolio-media-item"
            style={{ background: "#f5f6f7" }}
          >
            <DeviceFrame
              styles={{
                maxWidth: 800,
                margin: "auto"
              }}
            >
              <ImageLoader
                img="/images/ncsoft/gw2-characters-grid.jpg"
                placeholder="/images/ncsoft/gw2-characters-grid-small.jpg"
                aspectRatio={1000 / 1400}
                imageProps={{
                  alt: "Guild Wars 2 screen."
                }}
              />
            </DeviceFrame>
          </div>
        </section>

        <section className="content-container">
          <div className="row">
            <section className="col-xs-12 col-sm-8 col-sm-offset-2 portfolio-copy--second-row">
              <h2 className="sub-title load-in">Site Effects</h2>
              <p className="load-in">Usei um conjunto de efeitos de foco no hover. A ideia principal é revelar uma imagem em miniatura com um efeito especial ao passar por cima do link. A inspiração para essa ideia vem dos efeitos que vi no site <a target="_blank" href="http://fuge.ru/cases/" className="highlight my_highlight_lik" target="_"><em> fuge.ru</em></a>. As animações foram feitas usando a biblioteca <a target="_blank" href="https://greensock.com/tweenmax" className="highlight my_highlight_lik" target="_"><em> TweenMax</em></a>.</p>
            </section>
          </div>
        </section>

        <section className="portfolio-media">
          <div className="row">
            <div
              className="col-xs-12 col-sm-6 portfolio-media-item"
              style={{ background: "#363636" }}
            >
              <DeviceFrame>
                <ImageLoader
                  img="/images/ncsoft/gw-home-1.0.gif"
                  placeholder="/images/ncsoft/gw-home-1.0-small.jpg"
                  aspectRatio={1000 / 1400}
                  imageProps={{
                    alt: "Guild Wars screen."
                  }}
                />
              </DeviceFrame>
            </div>
            <div
              className="col-xs-12 col-sm-6 portfolio-media-item"
              style={{ background: "#363636" }}
            >
              <DeviceFrame>
                <ImageLoader
                  img="/images/ncsoft/gw-internal-page.jpg"
                  placeholder="/images/ncsoft/gw-internal-page-small.jpg"
                  aspectRatio={1000 / 1400}
                  imageProps={{
                    alt: "Guild Wars screen."
                  }}
                />
              </DeviceFrame>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default NCsoft;
