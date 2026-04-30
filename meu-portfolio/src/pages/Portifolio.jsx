import React from "react";
import "./styles.css";
import img from "../img/newimg.png";

function Portfolio() {
  return (
    <div>
      <header id="header">
        <section className="hero">
          <div className="hero-media" style={{ backgroundImage: `url(${img})` }}>
            <div className="hero-overlay"></div>
          </div>

          <div className="hero-content">
            <p className="hero-kicker">Desenvolvedor Java</p>
            <h1>
              Olá, eu sou <br />
              <span>Otavio Caetano Ribeiro</span>
            </h1>
            <p className="hero-description">
              Desenvolvedor em formação com foco em backend, APIs REST e
              integração com bancos de dados relacionais.
            </p>
          </div>
        </section>
      </header>

      <section id="sobre">
        <h2 className="section-title">Sobre Mim</h2>

        <div className="sobre-container">
          <p>
            Olá! Sou estudante de Engenharia de Software e atualmente atuo
            como estagiário em Suporte Técnico a sistemas SaaS. Minha carreira
            começou em funções operacionais, o que me proporcionou uma base
            sólida em organização, responsabilidade e atendimento.
          </p>

          <p>
            Com o início da graduação, passei a atuar diretamente na área de
            tecnologia, onde tive contato prático com sistemas em produção,
            análise e investigação de erros, manutenção de executáveis internos,
            execução de scripts e testes funcionais.
          </p>

          <p>
            Atualmente estou no último ano da faculdade e busco oportunidades
            na área de desenvolvimento web. Possuo conhecimento em
            <strong> Java</strong>, <strong>Spring Boot</strong>,
            <strong> JavaFX</strong>, <strong>Spring Security</strong>,
            <strong> PostgreSQL</strong>, <strong>React</strong>,
            <strong> Angular</strong> e <strong>JavaScript</strong>.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;