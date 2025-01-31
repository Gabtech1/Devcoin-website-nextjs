import styles from './Solutions.module.css';
import Image from 'next/image';
import Analytics from '../../../public/real-time.svg';
import Security from '../../../public/security.svg';
import USDT from '../../../public/usdt.svg';
import XRP from '../../../public/xrp.svg';
import ETH from '../../../public/eth.svg';
import Partner from '../../../public/partner.svg';
import Tasks from '../../../public/tasks.svg';
import Logo from '../../../public/logo.avif';
import Btn from '../Btn/index';

export default function Solutions() {
    return (
        <section className={styles.solutions}>
            <h2>Soluções inovadoras na Web3</h2>
            <p className={styles.desc}>Nossa plataforma combina segurança avançada, análises em tempo real e design fácil de usar para fornecer uma experiência de negociação incomparável</p>
            <div className={styles.grid}>
                <div className={styles.item1}>
                    <div className={styles.card_top}>
                        <div className={styles.icon}><Image src={Analytics} alt='Real-time analytics icon' /></div>
                        <div className={styles.description}>
                            <h3>Análises em tempo real</h3>
                            <p>Obtenha insights com nossas análises em tempo real. Acompanhe as tendências do mercado e tome decisões baseadas em dados com facilidade.</p>
                        </div>
                    </div>

                    <div className={styles.bottom}>
                        <div className={styles.crypto}>
                            <div className={styles.crypto_icon}><Image src={USDT} alt='Real-time analytics icon' /></div>
                            <div className={styles.description}>
                                <h3>USDT</h3>
                                <p>Blockchain descentralizada</p>
                            </div>
                        </div>

                        <div className={styles.crypto2}>
                            <div className={styles.crypto_icon}><Image src={XRP} alt='Real-time analytics icon' /></div>
                            <div className={styles.description}>
                                <h3>XRP</h3>
                                <p>Blockchain descentralizada</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.item2}>
                    <div className={styles.card_top}>
                        <div className={styles.icon}><Image src={Security} alt='Real-time analytics icon' /></div>
                        <div className={styles.description}>
                            <h3>Segurança avançada</h3>
                            <p>Devcoin usa criptografia avançada para proteger seus ativos e informações pessoais contra ameaças.</p>
                        </div>
                    </div>

                    <div className={styles.block}>
                        <div className={styles.bg1}>
                            <div className={styles.bg2}></div>
                        </div>
                    </div>
                </div>

                <div className={styles.item3}>
                    <div className={styles.card_top}>
                        <div className={styles.icon}><Image src={Partner} alt='Real-time analytics icon' /></div>
                        <div className={styles.description}>
                            <h3>Ecossistema e parcerias</h3>
                            <p>Promove um ecossistema próspero por meio de parcerias estratégicas e apoio a projetos inovadores.</p>
                        </div>
                    </div>

                    <div className={styles.circles}>
                        <div className={styles.cc1}>
                            <div className={styles.cc2}>
                                <div className={styles.cc3}>
                                    <div className={styles.icon}><Image src={Partner} alt='Real-time analytics icon' /></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className={styles.item4}>
                    <div className={styles.card_top}>
                        <div className={styles.icon}><Image src={Tasks} alt='Real-time analytics icon' /></div>
                        <div className={styles.description}>
                            <h3>Suporte para diversas moedas</h3>
                            <p>Gerencie e negocie uma ampla variedade de criptomoedas em uma única plataforma. Devcoin proporciona uma experiência de negociação abrangente.</p>
                        </div>
                    </div>

                    <div className={styles.cards_grid}>
                        <div className={styles.card1}><Image className={styles.logo} src={Logo} alt='devcoin logo' /></div>
                        <div className={styles.card2}><Image className={styles.logo} src={Logo} alt='devcoin logo' /></div>
                        <div className={styles.card3}><Image className={styles.logo} src={Logo} alt='devcoin logo' /></div>
                    </div>

                </div>
            </div>

            <div className={styles.dash}>
                <div className={styles.left}>
                    <h3>Solução completa em um painel para Web3 ALM</h3>
                    <p>Nossa plataforma completa fornece uma solução integrada e segura para gerenciamento abrangente de ativos e passivos Web3, permitindo que você otimize suas operações financeiras na economia descentralizada.</p>
                    <Btn text='Acessar painel' />
                </div>

                <div className={styles.right}>
                    <h4>Sacar cripto</h4>
                    <div className={styles.table}>
                        <div className={styles.col}>
                            <div className={styles.crypto_icon}><Image src={ETH} alt='Real-time analytics icon' /></div>
                            <span>de</span>
                            <p>Ethereum</p>
                            <p className={styles.hash}>0xfd9a6a7c645c962c2700c4644b82700c</p>
                        </div>

                        <div className={styles.col}>
                            <div className={styles.crypto_icon}><Image src={XRP} alt='Real-time analytics icon' /></div>
                            <span>para</span>
                            <p>XRP Ledger</p>
                            <p className={styles.hash}>0x65fd66ddad36eb0c351f526fd9</p>
                        </div>
                    </div>
                    <p className={styles.value}>Selecione o valor</p>
                    <div className={styles.box}>
                        <p>681,27 ETH</p>
                        <span>= 960.402 XRP</span>
                    </div>
                </div>
            </div>
        </section>
    );
}