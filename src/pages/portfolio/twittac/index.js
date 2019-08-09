import React from "react";
import Layout from "../../../components/layouts";
import ImageLoader from "../../../components/image-loader";
import DeviceFrame from "../../../components/device-frame";

export const frontmatter = {
  portfolio: true,
  order: 5,
  title: "Twit-tac",
  color: "blue",
  description: "Jogo do Galo",
  path: "/portfolio/twittac",
  media: [
    {
      type: "image",
      img: "/images/cobalt/cobalt-poster.png",
      placeholder: "/images/cobalt/cobalt-poster-small.png",
      aspectRatio: 0.75
    }
  ],
  styles: {
    background: "#f5f6f7"
  }
};

const Cobalt = props => {
  const { title, styles, media } = frontmatter;

  return (
    <Layout {...props} frontmatter={frontmatter}>
      <div className="portfolio">
        <section className="portfolio-media">
          <div
            className="portfolio-media-item portfolio-media-item"
            style={styles}
          >
            <ImageLoader
              {...media[0]}
              styles={{
                maxWidth: 800,
                margin: "auto"
              }}
              imageProps={{
                alt: title
              }}
            />
          </div>
        </section>
        <section className="content-container">
          <h1 className="page-title load-in">{title}</h1>
          <div className="row center">
            <div className="col-xs-12 col-sm-8">
              <p className="load-in">
                Este foi um dos meus primeiros projectos em Javascript,
                após aprender os fundamentos de HTML e CSS.
                A ideia foi trazer o tradicional jogo do galo,
                mas com um toque pessoal.
                Pensei em trocar os icons (circulo e cruz), para os 
                icons do Twitter, e chamar ao jogo <a target="_blank" href="https://nunosantoswebdesigner.github.io/twit-tac/" className="my_highlight_lik" target="_"><span className="highlight"> ' Twit-tac ' </span></a>.
              </p>
                
              <p className="load-in">
                Novas Aplicações de criação de icons como o "Icomoon" vieram mudar um pouco
                a forma tradicional como os icons são colocados nos websites.
                Neste projecto gerei uma biblioteca de icons e usei como '@font-family'.
              </p>
              <p className="load-in">
                A lógica de programação deste projecto é simples, e aproveitei os
                meus conhecimentos de CSS para inserir e remover classes.
              </p>
              Tecnologias: <em>HTML</em>, <em> LESS</em>,<em> JavaScript</em>,
              <em> GitHub Pages</em>, <em> Adobe XD</em>, <em> Icommon</em>
              <h5 className="load-in">ISSUES
                <ul>
                  <li>Pedir o nome do Jogador</li>
                  <li>Mudar a forma como troca de jogador</li>
                  <li>Implementar uma lógica para jogar contra o computador</li>
                </ul>
              </h5>
            </div>
          </div>
        </section>

        <section className="portfolio-media">
          <div className="row">
            <div
              className="col-xs-12 col-sm-6 portfolio-media-item"
              style={{ background: "#f8f8f8" }}
            >
              <DeviceFrame>
                <ImageLoader
                  img="/images/cobalt/bmw-1.jpg"
                  placeholder="/images/cobalt/bmw-1-small.jpg"
                  aspectRatio={431 / 800}
                  imageProps={{
                    alt: "BMW screen."
                  }}
                />
              </DeviceFrame>
            </div>
            <div
              className="col-xs-12 col-sm-6 portfolio-media-item"
              style={{ background: "#f8f8f8" }}
            >
              <DeviceFrame>
                <ImageLoader
                  img="/images/cobalt/bmw-2.jpg"
                  placeholder="/images/cobalt/bmw-2-small.jpg"
                  aspectRatio={517 / 800}
                  imageProps={{
                    alt: "BMW screen."
                  }}
                />
              </DeviceFrame>
            </div>
          </div>
        </section>

        <section className="portfolio-media">
          <div
            className="portfolio-media-item"
            style={{ maxWidth: 1000, margin: "auto" }}
          >
            <ImageLoader
              img="/images/cobalt/bmw-wireframes.jpg"
              aspectRatio={1200 / 1600}
              imageProps={{
                alt: "BMW wireframes."
              }}
            />
          </div>
        </section>

        <section className="portfolio-media">
          <div className="row">
            <div
              className="col-xs-12 col-sm-6 portfolio-media-item"
              style={{ background: "#f2f2f2" }}
            >
              <DeviceFrame>
                <ImageLoader
                  img="/images/cobalt/vw-canada-1.jpg"
                  placeholder="/images/cobalt/vw-canada-1-small.jpg"
                  aspectRatio={500 / 700}
                  imageProps={{
                    alt: "VW Canada screen."
                  }}
                />
              </DeviceFrame>
            </div>
            <div
              className="col-xs-12 col-sm-6 portfolio-media-item"
              style={{ background: "#f2f2f2" }}
            >
              <DeviceFrame>
                <ImageLoader
                  img="/images/cobalt/vw-canada-2.jpg"
                  placeholder="/images/cobalt/vw-canada-2-small.jpg"
                  aspectRatio={500 / 700}
                  imageProps={{
                    alt: "VW Canada screen."
                  }}
                />
              </DeviceFrame>
            </div>
          </div>
        </section>

        <section className="portfolio-media">
          <div className="row">
            <div
              className="col-xs-12 col-sm-6 portfolio-media-item"
              style={{ background: "#f2f2f2" }}
            >
              <DeviceFrame>
                <ImageLoader
                  img="/images/cobalt/vw-canada-3.jpg"
                  placeholder="/images/cobalt/vw-canada-3-small.jpg"
                  aspectRatio={500 / 700}
                  imageProps={{
                    alt: "VW Canada screen."
                  }}
                />
              </DeviceFrame>
            </div>
            <div
              className="col-xs-12 col-sm-6 portfolio-media-item"
              style={{ background: "#f2f2f2" }}
            >
              <DeviceFrame>
                <ImageLoader
                  img="/images/cobalt/vw-canada-4.jpg"
                  placeholder="/images/cobalt/vw-canada-4-small.jpg"
                  aspectRatio={500 / 700}
                  imageProps={{
                    alt: "VW Canada screen."
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

export default Cobalt;
