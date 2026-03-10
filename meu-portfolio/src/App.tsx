import React from "react";
import Portfolio from "./pages/Portifolio";
import Projetos from "./pages/Projetos/Projetos";
import Timeline from "./pages/timeline/Timeline";
import Header from "./components/Header/Header";
import ContactBlock from "./components/mensageria/ContactBlock"

function App() {
  return (
    <>
      <Header />
      <div id="home"><Portfolio /></div>
      <div id="timeline"><Timeline /></div> 
      <div id="projetos"><Projetos /></div>
      <div id="contactblock"><ContactBlock /></div>
    </>
  );
}

export default App;