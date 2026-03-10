import React from "react";
import "./timeline.css"

function Timeline() {
    return(
      <section id="timeline"> 
        <div className="timeline-container">
          <h2 className="timeline-title">Minha Trajetória</h2>
          <div className="timeline">
            <div className="timeline-item left">
              <div className="timeline-icon">
                <i className="fas fa-briefcase"></i>
              </div>

            <div className="timeline-content">
                <span className="date">2024 - Presente</span>
                <h3>Estagiário em Suporte Técnico N2 (SaaSTec Lebs)</h3>
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

            <div className="timeline-item left">
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

          </div>
        </div>
      </section>

    ); 
}

export default Timeline;