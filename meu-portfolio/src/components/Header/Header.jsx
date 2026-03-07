import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header className="header">

      <nav className="nav">

        <ul>

          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/sobre">Sobre</Link>
          </li>

          <li>
            <Link to="/projetos">Projetos</Link>
          </li>

        </ul>

      </nav>

    </header>
  );
}

export default Header;