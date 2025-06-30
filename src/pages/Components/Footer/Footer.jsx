import {
  faFacebook,
  faInstagram,
  faTwitter,
} 
from "@fortawesome/free-brands-svg-icons";
import "../../../App.css";
import "./Footer.css";
import getIcon from "../../../icons";

const Footer = () => {
  return (
    <>
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
    </>
  );
};

export default Footer;