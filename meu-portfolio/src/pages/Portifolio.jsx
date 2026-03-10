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
    </div>
  );
}

export default Portfolio;