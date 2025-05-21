import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../../App.css';
import './home.css';
import React from 'react';

const MenuIcon = () => <FontAwesomeIcon icon={faBars} style={{ color: "#41456C", }} />

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
                        <MenuIcon />
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Home;