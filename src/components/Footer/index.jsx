import styles from './Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../public/logo.avif';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.info}>
                <div className={styles.slogan}>
                    <h5>Seu futuro financeiro com segurança e transparência.</h5>
                    <Link className={styles.logo} href='/'><Image src={Logo} alt='devcoin logo' />DEVCOIN</Link>
                </div>
                <div className={`${styles.grid} animScroll `}>
                    <div className={styles.item}>
                        <h6>Produtos</h6>
                        <p>Invista em seu futuro</p>
                        <p>Ganhe dinheiro extra</p>
                        <p>Criptomoedas</p>
                        <p>Finanças com segurança</p>
                    </div>
                    <div className={styles.item}>
                        <h6>Quem somos</h6>
                        <p>Sobre nós</p>
                        <p>Carreiras</p>
                        <p>Novidades</p>
                        <p>Redes sociais</p>
                    </div>
                    <div className={styles.item}>
                        <h6>Suporte</h6>
                        <p>FAQs</p>
                        <p>Contatos</p>
                        <p>Mobile</p>
                        <p>Desktop</p>
                    </div>
                </div>
            </div>
            <Link className={styles.copy} href='https://www.gabdev.com.br/' target='_blank'>Copyright 2025 © desenvolvido por <span>Gabdev</span></Link>
        </footer>
    );
}