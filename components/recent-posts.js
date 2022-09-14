import rpStyles from '../styles/box.module.css'
import styles from '../styles/main.module.css'
import Article from './article';

const RecentPosts = ({articles}) => {

    return (
        <div className={rpStyles.container}>
            <h2 className={`${styles.subtitle} ${rpStyles.title}`}>Recent Posts</h2>
            {articles.map(item => 
                <div className={rpStyles.recentPost} key={item.id}>
                    <Article article={item} row={true}
                     main={false} hours={true} 
                     hasComments={false} brief={true}
                    /> 
                </div>
            )}
        </div>
    )
}

export default RecentPosts;