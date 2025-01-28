import styles from './Faq.module.css';
import Btn from '../Btn/index';

export default function Faq() {
    return (
        <div className={styles.bg}>
            <section className={styles.faq}>
                <h4>Tem alguma dúvida?<br></br>Nós temos suas respostas</h4>

                <div className={styles.question}>
                    <p>Confuso ou curioso? Não se preocupe ! Nós ajudamos você. Nossa seção de perguntas frequentes está aqui para fornecer respostas claras e diretas a todas as suas dúvidas.</p>
                    <Btn text='Leia mais' />
                </div>

                <div className={styles.question}>
                    <h5>O que é a Devcoin?</h5>
                    <p>Devcoin é uma plataforma blockchain projetada para oferecer soluções seguras, transparentes e eficientes para aplicações financeiras descentralizadas <span>(DEFI)</span>. Nossa plataforma permite que os usuários participem de várias atividades da blockchain, com fornecimento de liquidez, apostas e negociações, tudo em um ambiente integrado e fácil de usar.</p>
                </div>

                <div className={styles.question}>
                    <h5>Como eu começo a utilizar a Devcoin?</h5>
                    <p>Para começar a usar o devcoin, você precisará criar uma conta em nossa plataforma. Uma vez registrado, você pode conectar sua carteira de criptomoeda, como a Metamask, para interagir com nossos serviços. A partir daí, você pode explorar vários recursos, como fornecer liquidez para pools, apostar tokens e muito mais.</p>
                </div>
            </section>
        </div>
    );
}