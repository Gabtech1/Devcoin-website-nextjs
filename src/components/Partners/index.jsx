import styles from './Partners.module.css';
import Image from 'next/image';
import Tesla from '../../../public/tesla.webp';
import ETH from '../../../public/eth.svg';
import HBAR from '../../../public/hedera.svg';
import Vercel from '../../../public/vercel.svg';
import Apple from '../../../public/apple.svg';
import ENA from '../../../public/ethena.svg';

export default function Partners() {
    return(
        <section className={styles.partners}>
            <span>Nossos parceiros</span>
            <h3>Liderando o caminho em criptografia de confiança com a Devcoin</h3>
            <ul className={styles.list}>
                <li className={styles.list_item}><Image className={styles.techs} src={Tesla} alt=''/></li>               
                <li className={styles.list_item}><Image className={styles.techs} src={HBAR} alt=''/></li>               
                <li className={styles.list_item}><Image className={styles.techs} src={ETH} alt=''/></li>               
                <li className={styles.list_item}><Image className={styles.vercel} src={Vercel} alt=''/></li>               
                <li className={styles.list_item}><Image className={styles.techs} src={Apple} alt=''/></li>               
                <li className={styles.list_item}><Image className={styles.techs} src={ENA} alt=''/></li>          
            </ul>
        </section>
    );
}