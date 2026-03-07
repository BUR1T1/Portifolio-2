import React from "react";
import "./styles.css";
import img from "../assets/img.jpeg";

function Portfolio() {
  return (
    <div>
      <header id="header">
        <div className="hero">
          <div
            className="hero-image"
            style={{ backgroundImage: `url(${img})` }}
          ></div>

          <div className="hero-content">

            <div className="header-text">
              <p>Desenvolvedor Java</p>

              <h1>
                Olá, eu sou <br />
                <span>Otavio Caetano Ribeiro</span>
              </h1>

              <p className="skills">
                Java • Spring Boot • JavaFX • Spring Security • PostgreSQL •
                microserviços • React • Angular • JavaScript
              </p>
            </div>

          </div>
        </div>
      </header>


      <section id="sobre">
        <h2 className="section-title">Sobre Mim</h2>

        <div className="sobre-container">

          <p>
            Olá! Sou estudante de Engenharia de Software e atualmente atuo
            como estagiário em Suporte Técnico a sistemas SaaS.
            Minha carreira começou em funções operacionais,
            o que me proporcionou uma base sólida em organização,
            responsabilidade e atendimento.
          </p>

          <br />

          <p>
            Com o início da graduação, passei a atuar diretamente na área
            de tecnologia, onde tive contato prático com sistemas em produção,
            análise e investigação de erros, manutenção de executáveis internos,
            execução de scripts e testes funcionais.
          </p>

        </div>
      </section>


      <section id="timeline-section">

        <div className="timeline-container">

          <h2 className="timeline-title">Minha Trajetória</h2>

          <div className="timeline">


            <div className="timeline-item left">

              <div className="timeline-icon">
                <i className="fas fa-briefcase"></i>
              </div>

              <div className="timeline-content">

                <span className="date">2024 - Presente</span>

                <h3>Estagiário em Suporte Técnico (SaaS)</h3>

                <h4>SaaSTec Labs • Presencial</h4>

                <p>
                  Atuação em suporte técnico a sistemas SaaS, com foco em
                  backend, manutenção de executáveis internos,
                  execução de scripts para correção de dados,
                  rastreio e investigação de erros em ambiente de produção.
                </p>

              </div>
            </div>


            <div className="timeline-item right">

              <div className="timeline-icon">
                <i className="fas fa-briefcase"></i>
              </div>

              <div className="timeline-content">

                <span className="date">2020 - 2023</span>

                <h3>Vendedor / Estoquista</h3>

                <h4>Auto Peças Passaúna</h4>

                <p>
                  Atendimento ao cliente, organização e controle de estoque,
                  reposição de produtos e apoio às vendas.
                </p>

              </div>
            </div>


            <div className="timeline-item left">

              <div className="timeline-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>

              <div className="timeline-content">

                <span className="date">2023 - Presente</span>

                <h3>Engenharia de Software</h3>

                <h4>Universidade Positivo</h4>

                <p>
                  Foco em desenvolvimento de software, banco de dados,
                  lógica de programação, arquitetura de sistemas
                  e boas práticas de engenharia.
                </p>

              </div>

            </div>


            <div className="timeline-item right">

              <div className="timeline-icon">
                <i className="fas fa-code"></i>
              </div>

              <div className="timeline-content">

                <span className="date">Experiência Técnica</span>

                <h3>Desenvolvimento e Estudos</h3>

                <h4>Backend & Frontend</h4>

                <p>
                  Python aplicado a demandas profissionais,
                  C para criação de APIs e rotas,
                  além de estudos em JavaScript
                  (React, Next.js e Angular).
                </p>

              </div>

            </div>


          </div>
        </div>

      </section>

    </div>
  );
}

export default Portfolio;