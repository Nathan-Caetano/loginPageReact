import { faBars, } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../../App.css';
import './home.css';
import getIcon from '../../icons';
import React from 'react';


function Home() {
    return (
        <div className="content">
            <header>
                <div className='header-container'>
                    <div className="header-title">
                        <h1>Mobex</h1>
                    </div>
                    <div className="navbar">
                        <nav>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/about">About</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="menu">
                        {getIcon(faBars)}
                    </div>
                </div>
            </header>

            <footer>
                <div className="footer-container">
                    <div className="footer-top">
                        <div className="contact">
                            <h2>Contato</h2>
                                <ul>
                                    <li><span>Email:</span>contato@mobex.com.br</li>
                                    <li><span>WhatsApp:</span>xx xxxxx-xxxx</li>
                                    <li><span>Fone:</span>xx xxxxx-xxxx</li>
                                    <li><span>Endereço:</span>Av 19 de Dezembro 1008, Maringá PR</li>
                                </ul>
                        </div>
                        <div className="social-icons">
                            <h2>Social</h2>
                            <a href="#"><span>{getIcon(faInstagram, "#cecece")}</span>@MobexAuto</a>
                            <a href="#"><span>{getIcon(faFacebook, "#cecece")}</span>@Mobex_Auto</a>
                            <a href="#"><span>{getIcon(faTwitter, "#cecece")}</span>@Mobex_</a>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>© 2023 Mobex. All rights reserved.</p>
                        <p>Developed by <a href="">Nathan</a></p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;