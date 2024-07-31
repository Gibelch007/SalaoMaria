import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import React from 'react';
import styles from "../../pages/home/home.module.css";
import { Link, useNavigate } from "react-router-dom";

export function Home() {
    return (
        <>
            <Header />

            <main>
                <div className="container">
                    <img className={styles.banner} src="../../img/2.png" alt="" />
                </div>

                <div className="container">
                    <ul className={styles.grid}>
                        <li className="grid-button">
                            <Link to="/agendeOnline">
                                <span>Maquiagem</span>
                                <span>agende agora</span>
                            </Link>
                        </li>
                        <li>
                            <img src="../../img/01.jpg" alt="" />
                        </li>
                        <li className="grid-button">
                            <Link to="/agendeOnline">
                                <span>Sobrancelha</span>
                                <span>Agende Agora</span>
                            </Link>
                        </li>
                        <li>
                            <img src="../../img/11.jpg" alt="" />
                        </li>

                        <li>
                            <img src="../../img/31.jpg" alt="" />
                        </li>
                        <li className="grid-button">
                            <Link to="/agendeOnline">
                                <span>Cílios</span>
                                <span>agende agora</span>
                            </Link>
                        </li>
                        <li>
                            <img src="../../img/21.jpg" alt="" />
                        </li>
                        <li className="grid-button">
                            <Link to="/agendeOnline">
                                <span>Unhas</span>
                                <span>agende agora</span>
                            </Link>
                        </li>
                        
                    </ul>
                </div>
            </main> 

            <Footer />
        </>


    )




}