import boxStyles from '../styles/box.module.css'
import styles from '../styles/Home.module.css'

const Newsletter = () => {

    return (
        <div className={boxStyles.container}>
            <h2 className={`${styles.subtitle} ${boxStyles.title}`}>Good News Newsletter</h2>
            <p>Subscribe to our email newsletter for good news, sent out every Monday.</p>
            <form className={boxStyles.form} action="/" method="">
                <input className={boxStyles.input} placeholder="Email" type="email" id="email" name="email" required />
                <button className={boxStyles.subscribe} type="submit">Subscribe</button>
            </form>
        </div>
    )
}

export default Newsletter