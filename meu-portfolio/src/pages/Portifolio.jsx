import React from "react";
import "./styles.css";
import img from "../img/newimg.png";

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

          <br />

          <p>
            Atualmente estou no último ano da faculdade de Engenharia de Software
            e busco oportunidades na área de desenvolvimento web.
            Possuo conhecimento em <strong>Java</strong>, <strong>Spring Boot</strong>,
            <strong>JavaFX</strong>, <strong>Spring Security</strong>,
            <strong>PostgreSQL</strong>, <strong>Microserviços</strong>,
            <strong>React</strong>, <strong>Angular</strong> e <strong>JavaScript</strong>,
            além de experiência com práticas de programação orientada a objetos.
            Meu objetivo é aplicar esses conhecimentos em projetos desafiadores,
            contribuindo para soluções inovadoras e escaláveis.
          </p>

        </div>
      </section>
    </div>
  );
}

export default Portfolio;