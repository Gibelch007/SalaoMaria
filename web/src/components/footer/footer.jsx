

import styles from "../footer/footer.module.css";

export function Footer(){
  return (
    <footer className={styles.footer}>
      <p> Site autoral criado pelos Alunos Giovana Fernandes, Janaina Teixeira,
         Leonardo Côrrea e Maria Eduarda Machado. 
      </p>

      <div className={styles.footer__copyright}>

      <li className={styles.social_links}>
         <a href="https://www.instagram.com/josimaratorquetti/" target="_blank">
            <img src="./src/assets/instagram.png" alt="direcionar para página do Instagram de Josimara Torquetti" />
            <p> Josimara Torquetti</p>
        </a>

        <a href="https://www.facebook.com/josimaratorquetti" target="_blank">
           <img src="./src/assets/facebook.png" alt="direcionar para página do Facebook de Josimara Torquetti" />
           <p>Josimara Torquetti</p>
        </a>
       </li>

      </div>
    </footer>
  )
}