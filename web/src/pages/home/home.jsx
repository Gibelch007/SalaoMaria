import { Header } from "../../components/header/header";
import {Footer} from "../../components/footer/footer";
import React from 'react';
import styles from "../../pages/home/home.module.css"; 
import { Link } from "react-router-dom";

export function Home(){
    return (
        <>
        <Header />
            <div>
            <h1> cuidando da sua beleza</h1>
            <button onClick={() => window.location.href = '/Agendar'}></button>
            <img src="../../img/2.png" alt=""/>
            <img src="../../img/1.png" alt="" />

            </div>
            <div className="container">

            <h1>Ola Galerinha</h1>
            </div>
            <Footer/>
        </>


    )   




}