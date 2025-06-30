import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import "../../../App.css";
import "./Header.css";
import getIcon from "../../../icons";

const Header = () => {
  return (
    <>
      <header>
        <div className="header-container">
          <div className="header-title">
            <h1>Mobex</h1>
          </div>
          <div className="navbar">
            <nav>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">Sobre</a>
                </li>
                <li>
                  <a href="/contact">Contato</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-icons">
            <div id="user">
              <i id="default-user-icon">{getIcon(faUser)}</i>
            </div>
            <div id="menu">{getIcon(faBars)}</div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;