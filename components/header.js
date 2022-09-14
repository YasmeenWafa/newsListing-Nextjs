import styles from '../styles/main.module.css'

const Header = () => {
    return(
        <div className={styles.header}>
            <img width="200px" src="./educatly-logo.png"/>
            <a className={`${styles.button} ${styles.white}`} href="https://educatly.com">
                Visit our website
            </a>
        </div>
    )
}

export default Header;