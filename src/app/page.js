'use client'
import { useEffect } from "react";
import styles from "./page.module.css";
import Header from '../components/Header';
import Solutions from "../components/Solutions";
import Btn from "../components/Btn";
import Partners from "../components/Partners";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {

  useEffect(() => {
    function initAnimScroll() {
      const elements = document.querySelectorAll('.animScroll, .animScroll2');

      if (elements.length) {
        const halfWindow = window.innerHeight * .6;
        function scroll() {
          elements.forEach((el) => {
            const elTop = el.getBoundingClientRect().top - halfWindow;
            if (elTop < 0) {
              el.classList.add('active');
            }
          })
        }

        scroll();

        window.addEventListener('scroll', scroll);
      }
    }
    initAnimScroll()
  }, []);



  return (
    <>
      <Header />
      <section className={`${styles.home} animScroll `}>
        <video autoPlay loop muted playsInline>
          <source src="/home.mp4" type="video/mp4" />
        </video>
        <div className={styles.texts}>
          <h1>Revolucione suas transações <br></br> com soluções seguras de blockchain</h1>
          <p>Experimente o futuro das transações digitais com nossa tecnologia blockchain de última geração. Nossa plataforma garante que cada transação seja transparente, imutável e protegida contra fraudes.</p>
        </div>
        <Btn text='Começe agora' />
      </section>
      <Solutions />
      <Partners />
      <Faq />
      <Footer />
    </>
  );
}
