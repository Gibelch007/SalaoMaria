import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import styles from "../../pages/agendar/agendar.module.css";

export function AgendeOnline() {
    return (
        <>
            <Header />

            <main>
                <h1> Nossos Serviços</h1>
                
                <div className={styles.servicosContainer}>
                    <div>
                        <ul></ul>
                    </div>

                    <ul className={styles.servicos}>

                    </ul>
                </div>

            </main>

            <Footer />
        </>
    )
}