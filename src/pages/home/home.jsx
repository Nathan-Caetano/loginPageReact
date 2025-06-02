import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "../../App.css";
import "./home.css";
import getIcon from "../../icons";
import React from "react";

function Home() {
  return (
    <div className="content">
      <title>Bem-vindo a Mobex</title>
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

      <main>
        
      </main>

      <footer>
        <div className="footer-container">
          <div className="footer-top">
            <div className="contact">
              <h2>Contato</h2>
              <ul>
                <li>
                  <span>Email:</span>contato@mobex.com.br
                </li>
                <li>
                  <span>WhatsApp:</span>xx xxxxx-xxxx
                </li>
                <li>
                  <span>Fone:</span>xx xxxxx-xxxx
                </li>
              </ul>
            </div>
            <div className="address">
              <h2>Endereço</h2>
              <p>Rua Exemplo, 123 - Bairro Exemplo</p>
              <p>Cidade - Estado, 12345-678</p>
            </div>
            <div className="social-icons">
              <h2>Social</h2>
              <ul>
                <li>
                  <a href="#">
                    <span>{getIcon(faInstagram, "#cecece")}</span>
                    <span className="link-text">@MobexAuto</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>{getIcon(faFacebook, "#cecece")}</span>
                    <span className="link-text">@Mobex_Auto</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>{getIcon(faTwitter, "#cecece")}</span>
                    <span className="link-text">@Mobex_</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2023 Mobex. All rights reserved.</p>
            <p>
              Developed by{" "}
              <a
                href="https://github.com/Nathan-Caetano"
                target="blank_"
                rel="noopener"
              >
                Nathan
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
