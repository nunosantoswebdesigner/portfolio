import React from "react";
import Layout from "../../../components/layouts";
import ImageLoader from "../../../components/image-loader";
import DeviceFrame from "../../../components/device-frame";

export const frontmatter = {
  portfolio: true,
  order: 3,
  title: "Shake",
  color: "purple",
  description: "My Newsletters Shake Form",
  path: "/portfolio/shake",
  media: [
    {
      type: "image",
      img: "/images/freelance/freelance-poster.png",
      placeholder: "/images/freelance/freelance-poster-small.png",
      aspectRatio: 0.75
    }
  ],
  styles: {
    background: "#f5f6f7"
  }
};

const Freelance = props => {
  const { title, styles, media } = frontmatter;

  return (
    <Layout {...props} frontmatter={frontmatter}>
      <div className="portfolio">
        <section className="portfolio-media">
          <div
            className="portfolio-media-item portfolio-media-item--flush-bottom"
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
          <h1 className="page-title load-in">Shake Form</h1>
          <div className="row center">
            <div className="col-xs-12 col-sm-8">
              <p className="load-in">Desde que entrei nesta àrea uma das coisas que mais me irrita è o Subscrive Newsletters. Durante algum tempo pensei uma forma mais divertida e interactiva para o fazer.<br/> Então surgiu esta ideia!</p>
            </div>
          </div>
        </section>
        <section className="portfolio-media">
          <div className="row">
            <div
              className="col-xs-6 portfolio-media-item"
              style={{ background: "#f9f9f9" }}
            >
              <DeviceFrame type="phone--light">
                <ImageLoader
                  img="/images/freelance/spender-splash.png"
                  aspectRatio={1334 / 750}
                  imageProps={{
                    alt: "Spender app splash screen."
                  }}
                />
              </DeviceFrame>
            </div>
            <div
              className="col-xs-6 portfolio-media-item"
              style={{ background: "#f9f9f9" }}
            >
              <DeviceFrame type="phone--light">
                <ImageLoader
                  img="/images/freelance/spender-signin.png"
                  aspectRatio={1334 / 750}
                  imageProps={{
                    alt: "Spender app signin screen."
                  }}
                />
              </DeviceFrame>
            </div>
          </div>
        </section>
        <section className="content-container">
          <div className="row">
            <section className="col-xs-12 col-sm-8 col-sm-offset-2">
              <h2 className="sub-title load-in">Mas Como ?</h2>
              <p className="load-in">
                A vodafone criou uma promoção chamada Yorn Shake e isso deu-me a ideia de explorar melhor o 
                <em> Shake Event</em> que funciona ao abanar o dispositivo movel.
              </p>
            </section>
          </div>
        </section>
        <section className="portfolio-media">
          <div className="row">
            <div
              className="col-xs-4 portfolio-media-item"
              style={{ background: "#f9f9f9" }}
            >
              <DeviceFrame type="phone--light">
                <ImageLoader
                  img="/images/freelance/spender-signin-verify.png"
                  aspectRatio={1334 / 750}
                  imageProps={{
                    alt: "Spender app verify screen."
                  }}
                />
              </DeviceFrame>
            </div>
            <div
              className="col-xs-4 portfolio-media-item"
              style={{ background: "#f9f9f9" }}
            >
              <DeviceFrame type="phone--light">
                <ImageLoader
                  img="/images/freelance/spender-overview.png"
                  aspectRatio={1334 / 750}
                  imageProps={{
                    alt: "Spender app overview screen."
                  }}
                />
              </DeviceFrame>
            </div>
            <div
              className="col-xs-4 portfolio-media-item"
              style={{ background: "#f9f9f9" }}
            >
              <DeviceFrame type="phone--light">
                <ImageLoader
                  img="/images/freelance/spender-overlay.png"
                  aspectRatio={1334 / 750}
                  imageProps={{
                    alt: "Spender app overlayscreen."
                  }}
                />
              </DeviceFrame>
            </div>
          </div>
        </section>

        <section className="content-container">
          <div className="row">
            <section className="col-xs-12 col-sm-8 col-sm-offset-2">
              <h2 className="sub-title load-in">Desenhar e Projectar</h2>
              <p className="load-in">
               A minha ideia foi fazer um design com <em>svgs</em> e criar 4 ou 5 <em>views</em> diferentes e usar uma biblioteca de javascript chamada <a className="my_highlight_lik" target="_" href="https://swipe.js.org/"><span className="highlight"><em>Swipe</em></span></a> para construir os slides para as views.
              
              </p>
            </section>
          </div>
        </section>

      
        {/* <section className="portfolio-media">
          <div className="portfolio-media-item" style={{ background: "#111" }}>
            <DeviceFrame>
              <ImageLoader
                img="/images/freelance/dubsmash-quotes-full.jpg"
                placeholder="/images/freelance/dubsmash-quotes-full.jpg"
                aspectRatio={1024 / 1440}
                imageProps={{
                  alt: "Dubsmash desktop screen."
                }}
              />
            </DeviceFrame>
          </div>
        </section> */}

        <section className="portfolio-media">
          <div className="row">
            <div
              className="col-xs-12 col-sm-6 portfolio-media-item"
              style={{ background: "#111" }}
            >
              <DeviceFrame>
                <ImageLoader
                  img="/images/freelance/dubsmash-quote-wireframe-new.jpg"
                  placeholder="/images/freelance/dubsmash-quote-wireframe-new-small.jpg"
                  aspectRatio={1771 / 1440}
                  imageProps={{
                    alt: "Dubsmash admin panel wireframe."
                  }}
                />
              </DeviceFrame>
            </div>
            <div
              className="col-xs-12 col-sm-6 portfolio-media-item"
              style={{ background: "#111" }}
            >
              <DeviceFrame>
                <ImageLoader
                  img="/images/freelance/dubsmash-quote-wireframe-edit.jpg"
                  placeholder="/images/freelance/dubsmash-quote-wireframe-edit-small.jpg"
                  aspectRatio={1453 / 1440}
                  imageProps={{
                    alt: "Dubsmash admin panel wireframe."
                  }}
                />
              </DeviceFrame>
            </div>
          </div>
        </section>

        <section className="content-container">
          <div className="row">
            <section className="col-xs-12 col-sm-8 col-sm-offset-2">
              <h2 className="sub-title load-in">Layout</h2>
              <p className="load-in">
                Recentemente, eu tenho percebido um aumento nas citações do uso do SVG nas buscas sobre UI e UX.
                 Com as metodologias responsivas ganhando mais importancia e as mudanças de ranking por parte do Google, esse formato está a chamar a atenção dos desnvolvedores de sites e webapps.
                  Por sua natureza de renderização, a imagem não perde a qualidade, independente que esta seja expandida.
              </p>
              <p className="load-in">
                Após criar todos os recursos necessários no Adobe XD, passei à exportação dos mesmos como svgs.
                O foco deste projecto foi, não só usar as bibliotecas acima referidas, mas também usar o potêncial das imagens em svg.
              </p>
              <p className="load-in">
                Mantendo o objectivo final de criar uma app de Subscrive Newsletters, moderna e totalmente original.
              </p>
            </section>
          </div>
        </section>
        <section className="portfolio-media">
          <div className="row">
            <div
              className="col-xs-12 col-sm-6 portfolio-media-item"
              style={{ background: "#111" }}
            >
              <DeviceFrame type="tablet">
                <ImageLoader
                  img="/images/freelance/dubsmash-quotes-tablet.jpg"
                  placeholder="/images/freelance/dubsmash-quotes-tablet-small.jpg"
                  aspectRatio={2048 / 1536}
                  imageProps={{
                    alt: "Dubsmash tablet screen."
                  }}
                />
              </DeviceFrame>
            </div>
            <div
              className="col-xs-12 col-sm-6 portfolio-media-item"
              style={{ background: "#111" }}
            >
              <DeviceFrame type="tablet">
                <ImageLoader
                  img="/images/freelance/dubsmash-quotes-tablet-embed.jpg"
                  placeholder="/images/freelance/dubsmash-quotes-tablet-embed-small.jpg"
                  aspectRatio={2048 / 1536}
                  imageProps={{
                    alt: "Dubsmash embed screen."
                  }}
                />
              </DeviceFrame>
            </div>
          </div>
        </section>
        <section className="portfolio-media">
          <div className="row">
            <div
              className="col-xs-4 portfolio-media-item"
              style={{ background: "#F1F2F3" }}
            >
              <DeviceFrame type="phone">
                <ImageLoader
                  img="/images/freelance/control-room-home.png"
                  aspectRatio={1334 / 750}
                  imageProps={{
                    alt: "Control room app home screen."
                  }}
                />
              </DeviceFrame>
            </div>
            <div
              className="col-xs-4 portfolio-media-item"
              style={{ background: "#F1F2F3" }}
            >
              <DeviceFrame type="phone">
                <ImageLoader
                  img="/images/freelance/control-room-room.png"
                  aspectRatio={1334 / 750}
                  imageProps={{
                    alt: "Control room app room screen."
                  }}
                />
              </DeviceFrame>
            </div>
            <div
              className="col-xs-4 portfolio-media-item"
              style={{ background: "#F1F2F3" }}
            >
              <DeviceFrame type="phone">
                <ImageLoader
                  img="/images/freelance/control-room-living-room.png"
                  aspectRatio={1334 / 750}
                  imageProps={{
                    alt: "Control room app living room screen."
                  }}
                />
              </DeviceFrame>
            </div>
          </div>
        </section>
        <section className="portfolio-media">
          <div className="row">
            <div
              className="col-xs-4 portfolio-media-item"
              style={{ background: "#F1F2F3" }}
            >
              <DeviceFrame type="phone">
                <ImageLoader
                  img="/images/freelance/control-room-webcam.png"
                  aspectRatio={1334 / 750}
                  imageProps={{
                    alt: "Control room app webcam screen."
                  }}
                />
              </DeviceFrame>
            </div>
            <div
              className="col-xs-4 portfolio-media-item"
              style={{ background: "#F1F2F3" }}
            >
              <DeviceFrame type="phone">
                <ImageLoader
                  img="/images/freelance/control-room-thermostat.png"
                  aspectRatio={1334 / 750}
                  imageProps={{
                    alt: "Control room app thermostat screen."
                  }}
                />
              </DeviceFrame>
            </div>
            <div
              className="col-xs-4 portfolio-media-item"
              style={{ background: "#F1F2F3" }}
            >
              <DeviceFrame type="phone">
                <ImageLoader
                  img="/images/freelance/control-room-speaker.png"
                  aspectRatio={1334 / 750}
                  imageProps={{
                    alt: "Control room app speaker screen."
                  }}
                />
              </DeviceFrame>
            </div>
          </div>

          <div className="row">
            <div
              className="col-xs-4 portfolio-media-item"
              style={{ background: "#F1F2F3" }}
            >
              <DeviceFrame type="phone">
                <ImageLoader
                  img="/images/freelance/control-room-multiple-1.png"
                  aspectRatio={1334 / 750}
                  imageProps={{
                    alt: "Control room multiple users screen."
                  }}
                />
              </DeviceFrame>
            </div>
            <div
              className="col-xs-4 portfolio-media-item"
              style={{ background: "#F1F2F3" }}
            >
              <DeviceFrame type="phone">
                <ImageLoader
                  img="/images/freelance/control-room-multiple-2.png"
                  aspectRatio={1334 / 750}
                  imageProps={{
                    alt: "Control room multiple users screen."
                  }}
                />
              </DeviceFrame>
            </div>
            <div
              className="col-xs-4 portfolio-media-item"
              style={{ background: "#F1F2F3" }}
            >
              <DeviceFrame type="phone">
                <ImageLoader
                  img="/images/freelance/control-room-settings.png"
                  aspectRatio={1334 / 750}
                  imageProps={{
                    alt: "Control room settings screen."
                  }}
                />
              </DeviceFrame>
            </div>
          </div>
        </section>

        {/* <section className="content-container">
          <div className="row">
            <section className="col-xs-12 col-sm-8 col-sm-offset-2">
              <h2 className="sub-title load-in">Tictail</h2>
              <p className="load-in">
                I did a brief stint at Tictail, a Swedish ecommerce startup,
                leading one of the marketing teams.
              </p>
            </section>
          </div>
        </section> */}
{/* 
        <section className="portfolio-media">
          <div
            className="portfolio-media-item"
            style={{ background: "#fcc013" }}
          >
            <DeviceFrame bodyStyles={{ maxHeight: 800 }}>
              <ImageLoader
                img="/images/archive/tictail.jpg"
                placeholder="/images/archive/tictail-small.jpg"
                aspectRatio={7596 / 2560}
                imageProps={{
                  alt: "Tictail screen."
                }}
              />
            </DeviceFrame>
          </div>
        </section> */}

        <section className="content-container">
          <div className="row">
            <section className="col-xs-12 col-sm-8 col-sm-offset-2">
              <h2 className="sub-title load-in">Armazenamento</h2>
              <p className="load-in">
              No ano passado, vi um tutorial sobre como podemos usar o Google Sheets(ou o Exel do Google Docs.) como base de dados e fiquei espantado com o seu potêncial. Compartilhei alguns exemplos nas redes sociais e para meu espanto ninguém ligou muito a esses exemplos . Várias pessoas ficaram curiosas sobre o assunto mas de algum modo ninguém me disse que seria uma hipótese a experimentar ou mesmo a usar num desenvolvimento.

              </p>
              <p className="load-in">
Então um ano depois decidi usar esta abordagem neste projecto e aqui vão algumas das vantagens em usar o Google Sheets API para criar uma Base de Dados não relacional:

<br/> - Editar facilmente os dados do Sheet (super fácil e direto)
<br/> - Acessar o Sheet de qualquer dispositivo (multiplataforma)
<br/> - Compartilhar a folha com outras pessoas(quem também pode contribuir)
<br/> - Backups e histórico de versões (algumas bases de dados não têm isso!)
<br/> - Flexibilidade para crescer e reduzir a base de dados adicionando novas colunas em qualquer lugar
              </p>

              <p className="load-in">
Em termos de possíveis usos, podes obviamente fazer absolutamente qualquer coisa que possas imaginar, mas aqui estão alguns dos casos que podem ser particularmente interessantes para o uso do Google Sheets:

<br/> - Executar um blog (usando o Google Sheets como o CMS)
<br/> - Criar um site de análise de produtos
<br/> - Criar uma lista de pessoas, sites ou qualquer tipo de conteúdo que possa ser contribuído por utilizadores diretamente
<br/> - Armazenar informações de um formulário (totalmente personalizável, sem o Google Forms)
<br/> - Acompanhamento de finanças ou estatísticas em folhas e produzi-los em um site
<br/><br/>
Neste exemplo eu usei Javascript, mas na documentação do Google podes encontrar informações para usar em qualquer outro idioma.
              </p>


              
            </section>
          </div>
        </section>
        <section className="portfolio-media">
          <div className="row">
            <div
              className="col-xs-4 portfolio-media-item"
              style={{ background: "#a0c2de" }}
            >
              <DeviceFrame type="phone--light">
                <ImageLoader
                  img="/images/freelance/milestones-mobile.png"
                  placeholder="/images/freelance/milestones-mobile-small.png"
                  aspectRatio={1334 / 750}
                  imageProps={{
                    alt: "Milestones app mobile."
                  }}
                />
              </DeviceFrame>
            </div>
            <div
              className="col-xs-8 portfolio-media-item"
              style={{ background: "#a0c2de" }}
            >
              <DeviceFrame>
                <ImageLoader
                  img="/images/freelance/milestones@2x.png"
                  placeholder="/images/freelance/milestones-small.png"
                  aspectRatio={1342 / 2560}
                  imageProps={{
                    alt: "Milestones app desktop."
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

export default Freelance;
