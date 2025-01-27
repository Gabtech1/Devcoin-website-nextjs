import styles from './Partners.module.css';
import Image from 'next/image';

export default function Partners() {
    return(
        <section className={styles.partners}>
            <span>Nossos parceiros</span>
            <h3>Liderando o caminho em criptografia de confiança com a Devcoin</h3>
            <ul className={styles.list}>
                <li className={styles.list_item}><Image src={} alt=''/></li>               
                <li className={styles.list_item}><Image src={} alt=''/></li>               
                <li className={styles.list_item}><Image src={} alt=''/></li>               
                <li className={styles.list_item}><Image src={} alt=''/></li>               
                <li className={styles.list_item}><Image src={} alt=''/></li>               
                <li className={styles.list_item}><Image src={} alt=''/></li>               
            </ul>
        </section>
    );
}