import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Layout() {
    return (
        <div className={styles.container}>
            <img
                src="/images/profile.jpg"
                className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
            />
            <h1 className={utilStyles.namamu}>Zainal Abidin</h1>
            <div className={utilStyles.modeldeskripsi}>
                <p>Hello guys, my name is Zainal Abidin</p>
                <p>My current activity is studying at a university in Probolinggo-JawaTimur</p>
                <p className={styles.paragraflink}>(please see the results of the project that I'm working on by visiting <a href="https://github.com/zainalabidinhs">my github profile account</a>.)</p>
            </div>
        </div>
    )
}