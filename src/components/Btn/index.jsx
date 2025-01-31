import styles from './Btn.module.css';
import Link from 'next/link';

export default function Btn(props) {
    return(
        <Link href='#' className={styles.btn}>{props.text}</Link>
    );
}