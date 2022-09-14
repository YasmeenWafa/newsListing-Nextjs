import moment from 'moment';
import Link from 'next/link';
import styles from '../styles/main.module.css';
import ncStyles from '../styles/newsColumn.module.css';

const NewsColumn = ({articles}) => {

    const briefArticle = (article) => (
        <div className={ncStyles.briefArticle}>
            <p className={ncStyles.date}>{moment.utc(article.publishedAt).local().format("MMMM DD, YYYY")}</p>

            <div className={styles.link}>
            <Link href={{ pathname: `/news/${article.id}`, query: { article: JSON.stringify(article) } }}>
                <p>{article.title}</p>
            </Link>
            </div>
        </div>
    )

    const mainArticle = (article) => (
        <div className={ncStyles.mainArticle}>
            <p className={ncStyles.date}>{moment.utc(article.publishedAt).local().format("MMMM DD, YYYY")}</p>
            <Link  href={{ pathname: `/news/${article.id}`, query: { article: JSON.stringify(article) } }}
            >
                <img style={{ width:'100%' }}
                  src={article.urlToImage}/>
            </Link>
            <div className={styles.link}>
                <Link href={{ pathname: `/news/${article.id}`, query: { article: JSON.stringify(article) } }}>
                    <h3>{article.title}</h3>
                </Link>
            </div>
        </div>
    )
    return (
        <div className={ncStyles.container}>
            { articles[0] && mainArticle(articles[0])}
            {articles.slice(1,articles.length).map(item => briefArticle(item))}
        </div>
    )
}

export default NewsColumn;