import rpStyles from '../styles/recentPosts.module.css'
import styles from '../styles/Home.module.css'
import Article from './article';


const RecentPosts = ({articles}) => {

    return (
        <div className={rpStyles.container}>
            <h2 className={`${styles.subtitle} ${rpStyles.title}`}>Recent Posts</h2>
            {articles.map(item => 
                <Article key={item.id} article={item} row={true} main={false}
                        hours={true} hasComments={false} brief={true}
                /> 
            )}
        </div>
    )
}

export default RecentPosts;