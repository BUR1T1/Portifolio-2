import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import imgVenda1 from "../../img/HsVenda.png";
import imVenda from "../../img/Venda.png";
import init from "../../img/initi.png";
import michelebrito from "../../img/michelebrito.png";
import springboot from "../../img/logoSpring.png";
import imagemBook from "../../img/image.png"
import imageOnetoOne from "../../img/OneToone.png";


function Projetos() {
  const listaProjetos = [
    {
      id: 1,
      titulo: "Sistema de Vendas em JavaFX",
      descricao: "Aplicação desktop desenvolvida em Java utilizando JavaFX para gerenciamento de vendas. O sistema permite cadastro de produtos, registro de vendas e controle comercial.",
      tecnologias: "Java, JavaFX, SQLite",
      imagens: [imgVenda1, imVenda,init],
      linkRepo: "https://github.com/BUR1T1/Software-de-Vendas-em-JavaFX",
      linkRef: "#"
    },
    {
      id: 2,
      titulo: "Projeto_Book",
      descricao: "Esse projeto se iniciou como um aplicação simples paraa conprenção das notações @OneToMany e @ManyToOne, mas evoluiu para um sistema de gerenciamento de livros, permitindo cadastro de livros relacionamento ente publicadora e autor.",
      tecnologias: "React, Node.js,Spring Boot, PostgreSQL",
      imagens: [imagemBook,imageOnetoOne],
      linkRepo: "https://github.com/BUR1T1/Projeto_Book",
      linkRef: "https://www.youtube.com/watch?v=Ca30sv9EbLo&t=4105s"
    },
    {
      id: 3,
      titulo: "Spring-Boot-3-Curso-Completo-2023-Michelli-Brito-API-RESTful",
      descricao: "Esta é uma API RESTful completa para gerenciamento de produtos, desenvolvida durante o curso de Spring Boot 3 da Michelli Brito. O projeto foca em boas práticas, imutabilidade com Java Records e persistência relacional com PostgreSQL.",
      tecnologias: "Spring Boot, PostgreSQL",
      imagens: [michelebrito,springboot],
      linkRepo: "https://github.com/BUR1T1/Projeto_Book",
      linkRef: "https://www.youtube.com/watch?v=wlYvA2b1BWI&t=6296s"
    }
  ];

  return (
    <section style={{ padding: "120px 10%", backgroundColor: "#0a0a0a" }}>
      <h2 style={{ fontSize: "48px", marginBottom: "20px", color: "#fff", fontWeight: "800", textAlign: "center", letterSpacing: "-1px" }}>Projetos</h2>
      <div style={{ textAlign: "center", marginBottom: "80px", width: "80px", height: "4px", background: "linear-gradient(90deg, #e59800, #ff6b35)", margin: "0 auto 80px" }}></div>

      <div style={{ display: "flex", flexDirection: "column", gap: "120px" }}>
        {listaProjetos.map((projeto, index) => (
          <div 
            key={projeto.id} 
            className="projeto"
            style={{
              display: "flex",
              gap: "80px",
              alignItems: "center",
              flexDirection: index % 2 === 0 ? "row" : "row-reverse",
              flexWrap: "wrap"
            }}
          >
            <div style={{ flex: "1 1 400px" }} className="projeto-descricao">
              <h3 style={{ fontSize: "36px", marginBottom: "20px", color: "#e59800", fontWeight: "800", letterSpacing: "-0.5px" }}>{projeto.titulo}</h3>
              <p style={{ color: "#d0d0d0", lineHeight: "1.8", marginBottom: "20px", fontSize: "16px" }}>{projeto.descricao}</p>
              
              <div className="projeto-tech" style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "30px" }}>
                {projeto.tecnologias.split(", ").map((tech, idx) => (
                  <span key={idx} className="tech-tag" style={{ 
                    display: "inline-block",
                    padding: "6px 14px",
                    background: "rgba(229, 152, 0, 0.15)",
                    border: "1px solid rgba(229, 152, 0, 0.4)",
                    borderRadius: "20px",
                    color: "#e59800",
                    fontSize: "13px",
                    fontWeight: "600"
                  }}>
                    {tech}
                  </span>
                ))}
              </div>

              <div style={{ display: "flex", gap: "16px" }} className="links">
                <a href={projeto.linkRepo} target="_blank" rel="noopener noreferrer" style={{ 
                  textDecoration: "none",
                  padding: "12px 28px",
                  border: "2px solid #e59800",
                  color: "#e59800",
                  borderRadius: "6px",
                  fontWeight: "600",
                  fontSize: "14px",
                  transition: "all 0.3s ease"
                }}>Repositório</a>
                <a href={projeto.linkRef} target="_blank" rel="noopener noreferrer" style={{ 
                  textDecoration: "none",
                  padding: "12px 28px",
                  border: "2px solid rgba(229, 152, 0, 0.4)",
                  color: "#d0d0d0",
                  borderRadius: "6px",
                  fontWeight: "600",
                  fontSize: "14px",
                  transition: "all 0.3s ease"
                }}>Referência</a>
              </div>
            </div>

            <div style={{ flex: "1 1 400px", maxWidth: "600px", width: "100%" }} className="projeto-info">
              <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                loop={true}
                style={{
                  borderRadius: "15px",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                  "--swiper-navigation-color": "#ffffff00",
                  "--swiper-pagination-color": "#e5990000",
                }}
              >
                {projeto.imagens.map((src, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={src}
                      alt={`${projeto.titulo} print ${idx}`}
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                        borderRadius: "15px"
                      }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const botaoEstilo = {
  border: "1px solid #e59800",
  padding: "10px 20px",
  color: "#e59800",
  textDecoration: "none",
  borderRadius: "5px",
  fontWeight: "bold"
};

export default Projetos;
