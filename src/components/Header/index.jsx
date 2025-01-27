import styles from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../public/logo.png';
import Acc from '../../../public/person.svg';

export default function Header() {

    return (
        <header className={styles.header}>
            <Link className={styles.logo} href='/'><Image src={Logo} alt='devcoin logo' />DEVCOIN</Link>

            <nav className={styles.navbar}>
                <Link className={styles.navlinks} href='/#about'>Soluções</Link>
                <Link className={styles.navlinks} href='/#projects'>Parceiros</Link>
                <Link className={styles.navlinks} href='/#contact'>FAQ</Link>
            </nav>

            <button className={styles.btn}>
                <Image src={Acc} alt='account icon' />
                Criar conta</button>
        </header>
    );
}