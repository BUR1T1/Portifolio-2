import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import imgVenda1 from "../Projetos/img/HsVenda.png";
import imVenda from "../Projetos/img/Venda.png";
import init from "../Projetos/img/initi.png";
import michelebrito from "../Projetos/img/michelebrito.png";
import springboot from "../Projetos/img/logospring.png";
import imagemBook from "../Projetos/img/image.png"
import imageOnetoOne from "../Projetos/img/OneToone.png";


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
    <section style={{ padding: "120px 10%", backgroundColor: "black" }}>
      <h2 style={{ fontSize: "38px", marginBottom: "60px", color: "#fff" }}>Projetos</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "100px" }}>
        {listaProjetos.map((projeto, index) => (
          <div 
            key={projeto.id} 
            style={{
              display: "flex",
              gap: "60px",
              alignItems: "center",
              flexDirection: index % 2 === 0 ? "row" : "row-reverse",
              flexWrap: "wrap"
            }}
          >
            {/* Lado do Texto */}
            <div style={{ flex: "1 1 400px" }}>
              <h3 style={{ fontSize: "28px", marginBottom: "20px", color: "#e59800" }}>{projeto.titulo}</h3>
              <p style={{ color: "#b3b3b3", lineHeight: "1.8", marginBottom: "15px" }}>{projeto.descricao}</p>
              <p style={{ color: "#64748b", fontSize: "14px", fontStyle: "italic" }}>
                <strong>Tecnologias:</strong> {projeto.tecnologias}
              </p>
              <div style={{ display: "flex", gap: "20px", marginTop: "30px" }}>
                <a href={projeto.linkRepo} target="_blank" rel="noopener noreferrer" style={botaoEstilo}>Repositório</a>
                <a href={projeto.linkRef} style={botaoEstilo}>Referência</a>
              </div>
            </div>

            {/* Lado do Slider de Imagens */}
            <div style={{ flex: "1 1 400px", maxWidth: "600px", width: "100%" }}>
              <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                effect="fade" // Efeito de transição suave
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