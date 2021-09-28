import Head from 'next/head'
import styles from '../styles/Login.module.css'

export default function Login() {
    return (
        <div className={styles.container}>
            <Head>
                <link
                    rel="preload"
                    href="/fonts/RebelHero/Rebel-Hero.otf"
                    as="font"
                    crossOrigin=""
                />
            </Head>
            <div className={styles.main}>
                <input className={styles.formControl} placeholder="User" />
                <input className={styles.formControl} placeholder="Password" />
            </div>
        </div>
    )
}