import { Link } from "react-router-dom";
import styles from "./header.module.css";
import React from "react";

export function Header() {
    return (
        <header className={styles.header}>
            <div className="container">
                <h1 className={`${styles.logo} fonteSecundaria`}>Mary & <span>Jo</span></h1>
                <nav>
                    <ul>
                        <li className={styles.pink}>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <a href="#!">Serviços</a>
                        </li>
                        <li>
                            <a href="#!">Especiais</a>
                        </li>
                        <li>
                            <Link to="/agendeOnline">Agende Online</Link>
                        </li>
                        <li>
                            <a href="#!">Contato</a>
                        </li>
                        <li className={styles.social_links}>
                            <a href="https://www.instagram.com/josimaratorquetti/" target="_blank">
                                <img src="./src/assets/instagram.png" alt="direcionar para página do Instagram de Josimara Torquetti" />
                            </a>
                            <a href="https://www.facebook.com/josimaratorquetti" target="_blank">
                                <img src="./src/assets/facebook.png" alt="direcionar para página do Facebook de Josimara Torquetti" />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>


    )
}
