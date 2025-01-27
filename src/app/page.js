import styles from "./page.module.css";
import Header from '../components/Header/index';
import Solutions from "../components/Solutions/index";
import Btn from "../components/Btn/index";

export default function Home() {
  return (
    <>
      <Header />
      <section className={styles.home}>
          <video autoPlay loop muted playsInline>
            <source src="/home.mp4" type="video/mp4" />
          </video>
          <h1>Revolucione suas transações <br></br> com soluções seguras de blockchain</h1>
          <p>Experimente o futuro das transações digitais com nossa tecnologia blockchain de última geração. Nossa plataforma garante que cada transação seja transparente, imutável e protegida contra fraudes.</p>
          <Btn text='Começe agora'/>
      </section>
      <Solutions />
    </>
  );
}
