import { withRouter } from 'next/router';
import styles from '../../../styles/Home.module.css'

 function NewsItem ({ router: { query } }) {

    const object = JSON.parse(query.article);

    return (
        <div className={styles.news}>
            <h1>News Item </h1>
            <p>{object.title}</p>
        </div>
    )
}

export default withRouter(NewsItem);