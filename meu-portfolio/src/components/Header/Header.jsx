import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#timeline">Linha do tempo</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;