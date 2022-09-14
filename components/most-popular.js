import Link from 'next/link';
import mpStyles from '../styles/box.module.css'
import styles from '../styles/main.module.css'

const MostPopular = ({articles}) => {
    return (
        <div className={mpStyles.container}>
            <h2 className={`${styles.subtitle} ${mpStyles.title}`}>{articles.length} Most Popular</h2>
            <ol className={mpStyles.orderedList}>
            {articles && articles.map(item => 
            <li className={mpStyles.listItem} key={item.id}>
                <div className={styles.link}>
                    <Link href={{ pathname: `/news/${item.id}`, query: { article: JSON.stringify(item) } }} >
                        <p>{item.title}</p>
                    </Link>
                </div>
            </li>
            )}
            </ol>
        </div>
    )
}

export default MostPopular;